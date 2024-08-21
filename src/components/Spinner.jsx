import React from 'react'
import { RingLoader } from 'react-spinners'

const Spinner = ({loading}) => {
    const override = {
        margin:'200px auto',
        display: 'block',
        

    }
    return (
        <RingLoader
            color='#00B2FF'
            loading={loading}
            cssOverride={override}
            size={150} />
    )
}

export default Spinner