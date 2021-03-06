import React from 'react';

const StartScreening = ({ onChangeForm, startScreening }) => {
    return (
        <div className="start-screening">
            <h3>First time here?</h3>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="emailaddress" id="emailaddress" aria-describedby="emailAddressInput" placeholder=" " />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="createPassword">Create a Password (min. X characters)</label>
                    <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="createPassword" id="createPassword" aria-describedby="createPasswordInput" placeholder=" " />
                </div>
            </div>
            <div className="row">
                <div className="btn">
                    <a href="/set-up">
                        <button type="button" onClick={(e) => startScreening()} className="btn btn-danger">Sign Up &amp; Start Screening</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StartScreening;
