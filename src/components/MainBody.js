import React, { Component } from 'react';
import '../App.css'
import PopUp from "./PopUp";

class MainBody extends Component {
    state = { 
        billAmount: "",
        numberOfPeople: "",
        rate: "",
        seenPopUp: false,
        seenPopUp2: false,
    }
    


    togglePop = () => {
        this.setState({
         seenPopUp: !this.state.seenPopUp
        });
    };
    togglePop2 = () => {
        this.setState({
         seenPopUp2: !this.state.seenPopUp2
        });
    };

    onChangeBill=async(e)=>{
        await this.setState({billAmount: e.target.value});
    }
    onChangeNumber=async(e)=>{ 
        await this.setState({numberOfPeople: e.target.value});
    }
    onChangeRate=async(e)=>{
       await this.setState({rate: e.target.value});
    }


    onSubmit= async (e)=>{
        e.preventDefault()
        console.log(this.state)
        if(this.state.billAmount ==="" || this.state.rate ==="" || this.state.numberOfPeople ===""){
            console.log('Missing information')
            await this.setState({
                seenPopUp2: true
            })
        }else{
            const tip = (this.state.rate/100)*this.state.billAmount
            const tipPerP = tip/this.state.numberOfPeople
            console.log('tip:',tip )
            console.log('tipPerP:',tipPerP )
            

            await this.setState({

                tipTotal: tip,
                tipPerPerson: tipPerP,
                seenPopUp: true
            })
            console.log(this.state)
        }
    }

    clearInfo=async()=>{
        await this.setState({
            numberOfPeople: "",
            billAmount: "",
            rate: "",
        })
    }

    render() { 
        return ( 

          
            <div className="container" style={{width:'auto'}}>
                <h1>TIP CALCULATOR</h1>
                <hr className='newhr'/>

               

                <form>
                    {this.state.seenPopUp ? 
                        <PopUp 
                            toggle={this.togglePop}
                            clearInfo={this.clearInfo} 
                            text={'Tip Amount'} 
                            tipTotal={`Tip Total: ${this.state.tipTotal}`} 
                            tipPerPerson={`Tip Person: ${this.state.tipPerPerson}`}
                        /> : null}

                    {this.state.seenPopUp2 ? 
                        <PopUp 
                            toggle={this.togglePop2}
                            text={'Need more Information'} 
                        /> : null}

                    <div className='form-group row'> 
                        <label htmlFor='billAmount' className='col-sm-5'>Bill Amount</label>
                        <input 
                            className='col-sm-6'
                            type= 'number'
                            placeholder="e.g. 1200.49"
                            id= 'billAmount'
                            value={this.state.billAmount}
                            onChange={this.onChangeBill}
                        />
                    </div>

                    <br/>
                    <div className='form-group row'>
                        <label htmlFor= 'allchecks' className='col-sm-5' >Rate of tip</label>
                        <div id='allchecks' className='col-sm-6' style={{display: 'contents'}}>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" 
                                    className="custom-control-input" 
                                    id="5perc" 
                                    name="rateRadio"
                                    value='5'
                                    checked = {this.state.rate==='5'}
                                    onChange = {this.onChangeRate}
                                />
                                <label className="custom-control-label" htmlFor="5perc">5%</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" 
                                className="custom-control-input" 
                                id="10perc" 
                                name="rateRadio"
                                value='10'
                                checked = {this.state.rate==='10'}
                                onChange={this.onChangeRate}
                            />
                                <label className="custom-control-label" htmlFor="10perc">10%</label>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" 
                                className="custom-control-input" 
                                id="15perc" 
                                name="rateRadio"
                                value='15'
                                checked = {this.state.rate==='15'}
                                onChange={this.onChangeRate}
                            />
                                <label className="custom-control-label" htmlFor="15perc">15%</label>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className='form-group row'>
                        <label htmlFor='numberOfPeople' className='col-sm-5'>No. of people</label>
                        <input 
                            className='col-sm-6'
                            type= 'number'
                            placeholder="e.g. 3"
                            id= 'numberOfPeople'
                            value ={this.state.numberOfPeople}
                            onChange={this.onChangeNumber}
                        />
                    </div>
                    
                    <hr className='newhr'/>
                    <div className='form-group' style={{marginTop:30}}>
                        <button className="btn btn-light" onClick={this.onSubmit}>Submit</button>
                    </div>
                </form>          
            </div>
         );
    }
}
 
export default MainBody;