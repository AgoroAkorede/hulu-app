import React from 'react'
import FeaturedTv from '../featuredTv/featuredTv'
import {Data} from '../../data'

function TvMastHead() {
    return (
        <div>
            <FeaturedTv results={ Data.featuredData } title="FEATURED TV" />
            <FeaturedTv results={ Data.adultAnimation } title="ADULT ANIMATION" />
            <FeaturedTv results={ Data.FXonHulu } title="FX ON HULU" />
            <FeaturedTv results={ Data.RealityTv } title="REALITY TV" />
            <FeaturedTv results={ Data.Binge_WorthyTV } title="BINGE-WORTHY TV" />
        </div>
    )
}

export default TvMastHead
