import React, {PropTypes} from 'react';

import styles from "./index.css"

const MediaPartners = ({mediaPartners}) => (
    <div>
        <div>
            <h2>Media Partners</h2>
        </div>
        <div className={styles.mediaPartners}>
            {
                mediaPartners.map(partner => {
                        return (

                            <a>
                                <img src={partner.logo}/>
                            </a>
                        )
                    }
                )
            }
        </div>
    </div>
)

MediaPartners.propTypes = {
    mediaPartners: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logoUrl: PropTypes.string.isRequired,
        })
    )
}

export default MediaPartners