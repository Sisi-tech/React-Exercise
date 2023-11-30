import { useState } from "react";

const GiftCard = () => {
    const [giftCard, setGiftCard] = useState({
        firstName: "Jenny",
        lastName: "Kim",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below."
    });
    const spendGiftCard = () => {
        const newGiftCard = {...giftCard};
        setGiftCard((prevState) => {
            return {...prevState, 
                    text: "Your coupon has been used.",
                    valid: false,
                    instructions: "Please visit our restaurant to renew your gift card."
            }
        })
    }

    return (
        <div className="border p-6">
            <h1 className="text-4xl">Gift Card Page</h1>
            <h2 className="text-2xl">Customer: {giftCard.firstName} {giftCard.lastName}</h2>
            <h3 className="text-2xl">{giftCard.text}</h3>
            <p className="text-xl">{giftCard.instructions}</p>
            {
                giftCard.valid && (
                    <button
                        onClick={spendGiftCard}
                        className="bg-blue-800 p-2 rounded-md shadow-md shadow-gray-400 mt-4 hover:bg-gray-300 hover:text-gray-800"
                    >
                        Spend Gift Card
                    </button>
                )
            }
        </div>
    )
}

export default GiftCard; 