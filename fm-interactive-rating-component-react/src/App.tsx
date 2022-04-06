import React, { ChangeEvent, ReactElement } from "react";
import { ReactComponent as IconStar } from "./images/icon-star.svg";
import { ReactComponent as IconReceipt } from "./images/icon-receipt.svg";

export const App = () => {
  const [selectedButton, setSelectedButton] = React.useState(0);

  const handleRadio = (buttonValue: any): void => {
    setSelectedButton(parseInt(buttonValue));
  };

  const RatingButton = ({ button }: any): JSX.Element => {
    const style = "bg-number-button w-12 h-12 rounded-full mt-6";

    const activeStyle =
      selectedButton == button
        ? ` bg-normal-orange text-normal-white`
        : ` text-light-gray hover:bg-light-gray hover:text-normal-white`;

    return (
      <button
        value={button}
        key={button}
        className={style + activeStyle}
        onClick={() => handleRadio(button)}
      >
        {button}
      </button>
    );
  };

  // rating options
  const rating = [1, 2, 3, 4, 5];

  const handleSubmit = (event: any): void => {
    if (selectedButton == 0) {
      event.preventDefault();
      alert("Please select a rating");
    } else {
      console.log(`You selected ${selectedButton}`);
      setFormStep(2);
    }
  };

  // simple alternative to navigation
  const [formStep, setFormStep] = React.useState(1);

  return (
    <div className="flex justify-center items-center">
      {formStep == 1 && (
        <div
          id="card"
          className="bg-card rounded-2xl font-overpass w-full flex flex-col m-4 mt-8 mb-8 p-4 pt-8 pb-8 desktop:w-3/6 desktop:pl-12 desktop:pr-12"
        >
          <div>
            <div className="bg-number-button w-12 h-12 flex items-center justify-center rounded-full">
              <IconStar />
            </div>
          </div>
          <p className="text-normal-white text-2xl mt-3">How did we do?</p>
          <p className="text-medium-gray text-base mt-3">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between">
            {rating.map((button) => {
              return <RatingButton key={button} button={button} />;
            })}
          </div>

          <div>
            <button
              className="bg-normal-orange text-normal-white tracking-widest w-full rounded-full h-12 mt-6 hover:bg-normal-white hover:text-normal-orange"
              onClick={(e: any) => handleSubmit(e)}
            >
              SUBMIT
            </button>
          </div>
        </div>
      )}

      {formStep == 2 && (
        <div
          id="card"
          className="bg-card rounded-2xl font-overpass w-full flex flex-col m-4 mt-8 mb-8 p-4 pt-8 pb-8 desktop:w-3/6 desktop:pl-12 desktop:pr-12 desktop:pt-9 desktop:pb-9"
        >
          <div className="flex justify-center">
            <div className="flex items-center justify-center rounded-full">
              <IconReceipt />
            </div>
          </div>
          <div className="flex justify-center">
            <p className="bg-number-button text-normal-orange rounded-full h-10 p-4 flex justify-center items-center mt-6 desktop:w-fit">
              You selected {selectedButton} out of 5
            </p>
          </div>
          <p className="text-normal-white text-2xl text-center mt-6">
            Thank you!
          </p>
          <p className="text-medium-gray text-base text-center mt-3">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get it touch!
          </p>
        </div>
      )}
    </div>
  );
};
