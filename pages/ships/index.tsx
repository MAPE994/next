import ShipCard from "../../components/ShipCard"
import { GetServerSideProps } from 'next'
import iShip from "../../interfaces/iShip"
import { gql } from "@apollo/client";
import { spaceXClient } from "../../apollo-client";

export default function Ships({ ships, loading }: { ships: Array<iShip> }) {
  return (
    <div className="container">
      <h1 className="title">COLLECTIONS</h1>

      <div className="list-container">
        {ships?.map(ship => <ShipCard key={ship.id} ship={ship} />)}
      </div>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps<{ ships: Array<iShip> }> = async () => {
  const { data } = await spaceXClient.query({
    query: gql`
      query shipsQuery{
        ships {
          id
          name
          image
          type
        }
      }`,
  });

  const ships: Array<iShip> = data.ships

  return {
    props: {
      ships,
    }
  }
}