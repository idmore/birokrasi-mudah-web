import React, {PureComponent} from 'react'

export default class Recomendation extends PureComponent
{
    render()
    {
        return(
            <div className='deck-result' id='bigsearch-recomendation'>
                <div className='deck-result-content bg-white' style={{padding: 0}}>
                    <div className='grid' id='bigsearch-recomendation-result' />
                </div>
            </div>
        )
    }
}