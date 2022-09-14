import React, {useState} from 'react';
import './App.css';
import Fruitbasket from "./components/Fruitbasket";
import Form from "./components/Form";
import Button from "./components/Button";
import logo from "./assets/logo.png"

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTime, toggleDeliveryTime] = useState('daytime');
    const [review, setReview] = useState('');

    function resetFruits() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Voornaam: ${firstname} 
            Achternaam: ${lastname} 
            Leeftijd: ${age}
            Postcode: ${zipcode} 
            Bezorgfrequentie: ${deliveryFrequency}
            Bezorgmoment: ${deliveryTime}
            Opmerking: ${review}
            `);
        console.log(`
        Aardbeien: ${strawberries}
        Bananen: ${bananas}
        Apples: ${apples}
        Kiwi's: ${kiwis}
        `);
    }

    return (
        <>
            <img src={logo} id="logo" alt="Logo Fruitmand Bezorgservice - Je mag toch niet naar buiten"/>
            <section>
                <h1>Fruitmand bezorgservice</h1>
                <p>Bestel hier jouw fruit voor de komende periode. </p>

                <Fruitbasket
                    stateFruit={strawberries}
                    stateFruitSetterFunction={setStrawberries}
                    fruitTitle="🍓 Aardbeien"
                />

                <Fruitbasket
                    stateFruit={bananas}
                    stateFruitSetterFunction={setBananas}
                    fruitTitle="🍌 Bananen"
                />

                <Fruitbasket
                    stateFruit={apples}
                    stateFruitSetterFunction={setApples}
                    fruitTitle="🍏 Appels"
                />

                <Fruitbasket
                    stateFruit={kiwis}
                    stateFruitSetterFunction={setKiwis}
                    fruitTitle="🥝 Kiwi's"
                />

                <Button
                    stateButtonResetFunction={resetFruits}
                    buttonText="Reset"
                    buttonType="button"
                />
            </section>

            <section id="form-container">
                <form onSubmit={handleSubmit}>

                    <Form
                        stateForm={firstname}
                        stateFormSetter={setFirstname}
                        formLabel="Voornaam"
                        formName="firstname"
                        formID="firstname-field"
                        formType="text"
                    />

                    <Form
                        stateForm={lastname}
                        stateFormSetter={setLastname}
                        formLabel="Achternaam"
                        formName="lastname"
                        formID="lastname-field"
                        formType="text"
                    />

                    <Form
                        stateForm={age}
                        stateFormSetter={setAge}
                        formLabel="Leeftijd"
                        formName="age"
                        formID="age-field"
                        formType="number"
                    />

                    <Form
                        stateForm={zipcode}
                        stateFormSetter={setZipcode}
                        formLabel="Postcode"
                        formName="zipcode"
                        formID="zipcode-field"
                        formType="text"
                    />

                    <label htmlFor="delivery-field">Bezorgfrequentie
                        <select
                            name="delivery"
                            id="delivery-field"
                            value={deliveryFrequency}
                            onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                        >
                            <option value="week">Iedere week</option>
                            <option value="every-other-week">Om de week</option>
                            <option value="monthly">Iedere maand</option>
                        </select>
                    </label>

                    <label htmlFor="delivery-time">
                        <input
                            type="radio"
                            name="daytime"
                            id="delivery-time"
                            value="daytime"
                            checked={deliveryTime === "daytime"}
                            onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        Overdag
                    </label>

                    <label htmlFor="delivery-time">
                        <input
                            type="radio"
                            name="time"
                            id="delivery-time"
                            value="evening"
                            checked={deliveryTime === "evening"}
                            onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        's Avonds
                    </label>

                    <label htmlFor="comment-field">
                        Opmerking
                        <textarea
                            name="comments"
                            id="comment-field"
                            cols="30"
                            rows="10"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        >
                    </textarea>
                    </label>

                    <label htmlFor="terms-and-conditions-field">
                        <input
                            type="checkbox"
                            name="terms-and-conditions-field"
                            value="text"
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                    <Button
                        buttonType="submit"
                        buttonText="Versturen"
                    />

                </form>
            </section>
        </>
    );
}

export default App;
