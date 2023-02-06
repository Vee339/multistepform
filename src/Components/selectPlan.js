import React from 'react'

function SelectPlan(props){

    function handleSubmit(e){
        e.preventDefault()
        props.nextStep()
    }
    
    function changePlan(event){
        let clicked = event.target.getAttribute('for')
        const toggleBtn = document.getElementsByClassName('select')[0]
        const options = document.getElementsByClassName('options')[0]

        toggleBtn.classList.remove('yearly','monthly')
        toggleBtn.classList.add(clicked)
        if(clicked === "yearly"){
            options.classList.add('yearly')
        }else{
            options.classList.remove('yearly')
        }
    }


    function changePlanBtn(){

        const toggleBtn = document.getElementsByClassName('select')[0]
        const radio1 = document.querySelector('input[name="planType"]:nth-of-type(1)');
        const radio2 = document.querySelector('input[name="planType"]:nth-of-type(2)');
        const options = document.getElementsByClassName('options')[0]
    
        if (radio1.checked) {
            radio1.checked = false;
            radio2.checked = true;
            options.classList.add('yearly')
        } else{
            radio2.checked = false;
            radio1.checked = true;
            options.classList.remove('yearly')
        }

        if(toggleBtn.classList.contains('yearly')){
            toggleBtn.classList.remove('yearly')
            toggleBtn.classList.add('monthly')
        }else{
            toggleBtn.classList.remove('monthly')
            toggleBtn.classList.add('yearly')
        }
    }

    return(
        <div className="content select-plan">
                 <h2>Select your plan</h2>
                 <p>You have the option of monthly or yearly billing.</p>
                 <form onSubmit={handleSubmit}>
                     <div className="options">
                        <div className="option">
                            <input 
                                type="radio" 
                                required  
                                name="plan" 
                                value="arcade"
                                id="arcade" 
                                style={{visibility:"hidden", width:"0", height:"0"}}
                                onChange={props.handleOptionChange}
                                checked={props.plan === "arcade"}
                            />
                            <label htmlFor="arcade">
                                <div className="imgBox">
                                    <img src="assets/images/icon-arcade.svg" alt="" />
                                </div>
                                <div className="info">
                                     <h5>Arcade</h5>
                                     <p>$9/mo</p>
                                     <span>2 months free</span>
                                </div>
                            </label>
                        </div>
                        <div className="option">
                            <input 
                                type="radio" 
                                name="plan" 
                                id="advanced" 
                                value="advanced"
                                style={{visibility:"hidden", width:"0", height:"0"}}
                                onChange={props.handleOptionChange}
                                checked={props.plan === "advanced"}
                            />
                            <label htmlFor="advanced">
                                <div className="imgBox">
                                    <img src="assets/images/icon-advanced.svg" alt="" />
                                </div>
                                <div className="info">
                                     <h5>Advanced</h5>
                                     <p>$12/mo</p>
                                     <span>2 months free</span>
                                </div>
                            </label>
                        </div>
                        <div className="option">
                            <input 
                                type="radio" 
                                name="plan" 
                                id="pro" 
                                value="pro"
                                style={{visibility:"hidden", width:"0", height:"0"}}
                                onChange={props.handleOptionChange}
                                checked={props.plan === "pro"}
                            />
                            <label htmlFor="pro">
                                <div className="imgBox">
                                    <img src="assets/images/icon-pro.svg" alt="" />
                                </div>
                                <div className="info">
                                     <h5>Pro</h5>
                                     <p>$15/mo</p>
                                     <span>2 months free</span>
                                </div>
                            </label>
                        </div>
                     </div>
                     <div className="planType">
                         <input 
                            type="radio" 
                            name="planType" 
                            id="monthly" 
                            value="monthly"
                            onChange={props.handleOptionChange}
                            checked={props.planType === "monthly"}
                         />
                         <label htmlFor="monthly" onClick={changePlan}>Monthly</label>
                         <div className="select monthly" onClick={changePlanBtn}>
                             <div className="button"></div>
                         </div>
                         <input 
                            type="radio" 
                            name="planType" 
                            id="yearly" 
                            value="yearly"
                            onChange={props.handleOptionChange}
                            checked={props.planType === "yearly"}
                         />
                         <label htmlFor="yearly" onClick={changePlan}>Yearly</label>
                     </div>
                     <div className="buttons">
                         <input type="button" value="Go Back" onClick={props.prevStep}/>
                         <input type="submit" value="Next Step" />
                     </div>
                 </form>
        </div>
    )
}

export default SelectPlan