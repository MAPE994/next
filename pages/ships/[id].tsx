import { GetServerSideProps } from "next/types";
import { spaceXClient } from "../../apollo-client";
import { gql } from "@apollo/client";
import iShip from "../../interfaces/iShip";
import styles from '../../styles/ShipDetailView.module.css'
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import BasicInfoCard from "../../components/BasicInfoCard";
import Mission from "../../components/Mission";
import iBasicInfo from "../../interfaces/iBasicInfo";

const FALLBACK_IMAGE_URL: string = "https://ichef.bbci.co.uk/news/976/cpsprodpb/C5EC/production/_117686605_9d7a3562-59e1-454a-ac31-88a108c54573.jpg";

export default function Ship({ ship }: { ship: iShip }) {
  const renderMissions: boolean = !!ship?.missions?.length

  const BASIC_INFO: Array<iBasicInfo> = [
    {
      title: "Year Built",
      value: ship.year_built
    },
    {
      title: "Weight",
      value: `${ship.weight_kg} kg`
    },
    {
      title: "Class",
      value: ship.class
    },
    {
      title: "Home Port",
      value: ship.home_port
    }
  ]

  return (
    <>
      <div className={styles.shipCard} style={{ background: `url(${!!ship.image ? ship.image : FALLBACK_IMAGE_URL}) no-repeat`, backgroundSize: "cover" }}>
        <div className={styles.cta}>
          <Link href={`/ships`}><ArrowLeft /></Link>
        </div>
        <div className={styles.content}>
          <div>
            <h1 className={styles.shipName}>{ship.name}</h1>
            <h2 className={styles.shipType}>{ship.type}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div >
          <h3 className={styles.basicInfoTitle}>Basic info</h3>
          <div>
            {
              BASIC_INFO.map(prop => { return <BasicInfoCard key={prop.title} title={prop.title} value={prop.value} /> })
            }
          </div>
        </div>
        {renderMissions && (
          <div className={styles.missions}>
            <h3 className={styles.missionsTitle}>Missions</h3>
            <div>
              {ship?.missions?.map(mission => { return <Mission key={mission.flight} title={mission.name} value={`Flight: ${mission.flight}`} /> })}
            </div>
          </div>
        )}
      </div>
      <div className={styles.ctaBottom}>
        <Link href={`/ships`}>
          <ArrowLeft />
          <p>Back to the list</p>
        </Link>

      </div>
    </>
  )
};

export const getServerSideProps: GetServerSideProps<{ ship: iShip }> = async ({ params }) => {

  const variables = { id: params?.id };
  const { error, data } = await spaceXClient.query({
    query: gql`
    query shipQuery($id: ID!) {
      ship(id: $id) {
        type
        weight_kg
        year_built
        class
        image
        name
        missions {
          flight
          name
        }
        home_port
      }
    }`,
    variables: variables
  });

  const ship: iShip = data.ship

  return {
    props: {
      ship,
    }
  }
};