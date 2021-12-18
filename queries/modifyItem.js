import { gql } from '@apollo/client';

const MODIFY_ITEM = gql`
    mutation modifyItem(
        $id: ID!, 
        $itemId: String, 
        $name: String, 
        $price: Int,
  		$type: String,
  		$imgSrc: String,
        $description: String,
  	    $date: Date!
    ) 
    {
        modifyItem(
            _id: $id,
            query: {
                _id: $itemId
                name: $name
                price: $price
                type: $type
                imgSrc: $imgSrc
                description: $description
                date: $date
            }
        ){
            _id
            name
            price
            type
        	imgSrc
        	description
        	date
        }
    }
`;

export default MODIFY_ITEM;