import offerImage2 from '../../assets/offer2.png'
import mainOfferImage from '../../assets/offer1.png'
function Offer() {
  return (
    <div className="flex mx-auto w-[86%] sm:w-[80%]    items-center mt-7 md:mt-14 justify-between gap-4 md:gap-0">
      <div className=''>
        <img src={mainOfferImage} className=''/>
      </div>
      <div className='h-full'>
        <img src={offerImage2} className='h-full' />
      </div>
    </div>
  );
}

export default Offer;
