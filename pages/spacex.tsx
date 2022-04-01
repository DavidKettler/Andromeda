import type { NextPage } from 'next'

import { useQuery, gql } from "@apollo/client";
import styles from '../styles/Spacex.module.css'

const SPACEX_LAUNCHES = gql`
    {
        launchesPast {
            mission_name
            details
            links {
                flickr_images
            }
        }
    }
`;

const getRandomImg = imgs => imgs[Math.floor(Math.random() * imgs.length)];

export default () => {
    const { loading, error, data } = useQuery(SPACEX_LAUNCHES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return data.launchesPast.map(({ mission_name, details, links }) => (
        <div key={mission_name}>
            <img src={getRandomImg(links.flickr_images)} width="200" />
            <h3>{mission_name}</h3>
            <p>{details}</p>
            <hr />
        </div>
    ));
}
