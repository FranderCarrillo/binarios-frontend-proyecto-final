import { useGetAllOffer_ReactQuery } from '../../services/Offers/OfferHooks';
import { login } from '../../api/apiToken';

const ListOffers = () => {
    login({
        email: 'jose@gmail.com',
        password: '1234'
    });
    const { offers, isPending, error } = useGetAllOffer_ReactQuery();

  return (
    <div>
      <div className='card-container'>
        {offers?.map(offer=>(
          <div>
            <span key={offer.offerId}>{offer.job}</span>
            <span>{offer.company?.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListOffers