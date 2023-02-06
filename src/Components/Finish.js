import React from 'react'

function Finish(props){

    function handleSubmit(e){
        var a = window.confirm("Confirm your purchase")
        e.preventDefault()
        if(a){
            props.nextStep()
        }
    }

    function renderMonthlyPrices(){
        switch(props.plan){
            case 'advanced': return '$12/mo'
            break;
            case 'pro': return '$15/mo'
            break;
            default: return '$9/mo'
        }
    }
    function renderYearlyPrices(){
        switch(props.plan){
            case 'advanced': return '$120/yr'
            break;
            case 'pro': return '$150/yr'
            break;
            default: return '$90/yr'
        }
    }

    const renderPickons = props.pickons.map(function(pickon){
        return(
            <div className="pickonnn">
                      <div className="type">{pickon}</div>
                      <div className="price">
                      {(pickon === "larger storage" || pickon === "customizable profile") ?
                             props.planType === "monthly" ? "+$2/mo": "+$20/y" 
                             : props.planType === "monthly" ? "+$1/mo": "+$10/y"
                      }
                      </div>
            </div>
        )
    })

    const calculateTotal = function(){
        let total = 0

        if(props.planType === "monthly"){
             switch(props.plan){
                 case 'advanced': total = 12
                 break;
                 case 'pro': total = 15
                 break;
                 default: total = 9
             }
        }else{
            switch(props.plan){
                case 'advanced': total = 120
                break;
                case 'pro': total = 150
                break;
                default: total = 90
            }
        }

        props.pickons.forEach(function(pickon){
            if(pickon === "larger storage" || pickon === "customizable profile"){
                total += props.planType === "monthly" ? 2 : 20
            }else{
                total += props.planType === "monthly" ? 1 : 10
            }
        })

        return total
    }

    return(
        <div className="content finish">
            <h2>Finishing Up</h2>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="summary">
                <div className="main">
                    <div className="info">
                        <h5 className="plan-type">{`${props.plan} (${props.planType})`}</h5>
                        <a href="#" onClick={props.secondStep}>change</a>
                    </div>
                    <div className="price">{props.planType === 'monthly' ? renderMonthlyPrices() : renderYearlyPrices()}</div>
                </div>
                <div className="pickons-summary">
                {props.pickons.length > 0 && renderPickons}
                    
                </div>
            </div>
            <div className="total">
                <div className="label">Total (per {props.planType === "monthly" ? "month" : "year"})</div>
                <div className="total-price">{`$ ${calculateTotal()} / ${props.planType === "monthly" ? "mo" : "y"}`}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="buttons">
                    <input type="button" value="Go Back" onClick={props.prevStep} />
                    <input type="submit" value="Confirm" />
                </div>
            </form>
        </div>
    )
}

export default Finish