import { gql } from '@apollo/client';

const MODIFY_ITEM = gql`
    mutation modifyItem(
        $_id: ID!, 
        $itemId: String, 
        $name: String, 
        $price: Int,
  		$type: String,
  		$imgSrc: String,
        $description: String,
  	    $modified: Date!
    ) 
    {
        modifyItem(
            _id: $_id,
            query: {
                _id: $itemId
                name: $name
                price: $price
                type: $type
                imgSrc: $imgSrc
                description: $description
                modified: $modified
            }
        ){
            _id
            name
            price
            type
        	imgSrc
        	description
        	modified
        }
    }
`;

export default MODIFY_ITEM;