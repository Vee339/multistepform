import React from 'react'
import Sidebar from './Sidebar.js'
import Personinfo from './Personinfo.js'
import SelectPlan from './selectPlan'
import Pickons from './Pickons.js'
import Finish from './Finish.js'
import Thanks from './Thanks.js'

function Completeform(){

    const [formData, setFormData] = React.useState({
        step:1,
        name:'',
        email:'',
        phoneNumber: '',
        plan: 'arcade', //arcade, advanced or pro
        planType: 'monthly', //monthly or yearly
        pickons:[]
    })

    const {step} = formData
    const {name, email, phoneNumber} = formData
    const {plan, planType} = formData
    const {pickons} = formData

    function prevStep(){
        const {step} = formData
        setFormData((prevFormData) => ({ ...prevFormData, step: step - 1}))
    }

    function nextStep(){
        const {step} = formData
        setFormData((prevFormData) => ({ ...prevFormData, step: step + 1}))
    }

    function secondStep(){
        const {step} = formData
        setFormData((prevFormData) => ({ ...prevFormData, step: 2}))
    }

    function handleChange(e){
          setFormData((prevFormData) => ({
              ...prevFormData,
              [e.target.name] : e.target.value
          }))
          
    }

    function handleOptionChange(event){
       setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }

    function addChecks(event){
        setFormData((prevFormData) => ({
            ...prevFormData,
            pickons : [...prevFormData.pickons, event.target.value]
        }))
    }

    function removeChecks(event){
        setFormData((prevFormData) => {
            const pickons = prevFormData.pickons.filter(p => p !== event.target.value)
            return {
                ...prevFormData,
                pickons
            }
        })
    }


    const project = () => {
        switch(step) {
  
          case 1: return <Personinfo nextStep={nextStep} handleChange={handleChange} name={name} email={email} phoneNumber={phoneNumber}/>;
          case 2: return <SelectPlan prevStep={prevStep} nextStep={nextStep} handleOptionChange={handleOptionChange} plan={plan} planType={planType} />;
          case 3: return <Pickons prevStep={prevStep} nextStep={nextStep} pickons={pickons} addChecks={addChecks} removeChecks={removeChecks}/>;
          case 4: return <Finish prevStep={prevStep} nextStep={nextStep} secondStep={secondStep} plan={plan} planType={planType} pickons={pickons} />;
          default: return <Thanks />
        }
      }

    return(
         <main>
            <Sidebar step={step} />

               {project()}
           
               
          
         </main>
    )
}

export default Completeform