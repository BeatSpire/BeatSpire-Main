import { Button } from '@mui/material';
import { useContext,useState } from 'react';

import Modal from './Modal';
import { BlockchainConfig } from '../../../BackendConfig/BlockchainConfig';
import { shortenAddress } from './utils';

const PaymentBodyCmp = ({ nft, nftCurrency }) => (

  <div className="flex flex-col">
    <div className="flexBetween">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Item</p>
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Subtotal</p>
    </div>
    <div className="flexBetweenStart my-5">
      <div className="flex-1 flexStartCenter">
      
        <div className="flexCenterStart flex-col ml-5">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">{shortenAddress(nft.seller)}</p>
          <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal">{nft.name}</p>
        </div>
      </div>
      <div>
        <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal">{nft.price} <span className="font-semibold">{nftCurrency}</span></p>
      </div>
    </div>
    <div className="flexBetween mt-10">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Total</p>
      <p className="font-poppins dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal">{nft.price} <span className="font-semibold">{nftCurrency}</span></p>
    </div>
  </div>
);


const NFTCard = ({ nft, onProfilePage }) => {
  const { nftCurrency,currentAccount,buyNFT } = useContext(BlockchainConfig);
  const [paymentModal, setPaymentModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const checkout = async () => {
    await buyNFT(nft);

    setPaymentModal(false);
    // setSuccessModal(true);
  };
  console.log(nft.image)
  // console.log(nft.image)
  // const img = nft.image.replace("https:ipfs.io","https://infura-ipfs.io")
  // console.log(img)
  return (
   
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
        <div className="relative w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
        <audio autoPlay = {false} controls>
      {/* <source   src = "https://ipfs.io/ipfs/bafybeid5gljppqk6ti3eb2x7mbvgjghafe4xyugabapb7yyiis2bnhnkzq/y2mate.com%20-%20Sickick%20Infected%20Ringtone%20%20New%20Ringtone%202022%20%20Attitude%20BGM%20Ringtone%20%20Ringtones%20Addict%20.mp3"  type="audio/mpeg" /> */}
      <source   src = {nft.image}  type="audio/mpeg" />
     
      Your browser does not support the audio element.
    </audio>
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">{nft.name}</p>
          <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">{nft.price} <span className="font-normal"> {nftCurrency}</span></p>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">{shortenAddress(onProfilePage ? nft.owner : nft.seller)}</p>
          </div>
          <div className="mt-1 minlg:mt-3 flexBetween flex-row" />
        </div>
 
        {paymentModal
      && (
      <Modal
        header="Check Out"
        body={<PaymentBodyCmp nft={nft} nftCurrency={nftCurrency} />}
        footer={(
          <div className="flex flex-row sm:flex-col ">
             <Button
                  btnName={`Buy for ${nft.price} ${nftCurrency}`}
                  btnType="primary"
                  classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                  onClick={checkout}
                >Confirm and Pay</Button>
            <Button
              btnName="Cancel"
              classStyles="rounded-xl"
              handleClick={() => { setPaymentModal(false); }}
            />
          </div>
        )}
        handleClose={() => { setPaymentModal(false); }}
      />
      )}
      { successModal
      && (
      <Modal
        header="Payment Successful"
        body={(
          <div className="flexCenter flex-col text-center" onClick={() => setSuccessModal(false)}>
            <div className="relative w-52 h-52">
              {/* <Image src={nft.image || images[`nft${nft.i}`]} objectFit="cover" layout="fill" /> */}
            </div>
            <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal mt-10"> You successfully purchased <span className="font-semibold">{nft.name}</span> from <span className="font-semibold">{shortenAddress(nft.seller)}</span>.</p>
          </div>
          )}
        footer={(
          <div className="flexCentre flex-col ">
            <Button
              btnName="Check it out"
              classStyles="sm:mb-5 sm:mr-0 rounded-xl"
             
            />
          </div>
        )}
        handleClose={() => { setSuccessModal(false); }}
      />
      )}
      </div>
    
  );
};

export default NFTCard;
