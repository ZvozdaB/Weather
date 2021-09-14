
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import "./Input.css"


function Input(props) {
    
    // const [cord, setCord] = useState({ lat: null, lon: null })

    const handleSelect = async value => {
        const result = await geocodeByAddress(value);
        const latLon = await getLatLng(result[0]);
        props.setAddress("");
        props.setCity(value)
        props.setCord(latLon);
    }
    
    return (
        <PlacesAutocomplete value={props.address} onChange={props.setAddress} onSelect={handleSelect} searchOptions={{ types: ['(cities)']  }} >
            {
                ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className={"input-box"}>
                        <input {...getInputProps({ placeholder: "Пошук міста", className:"input" })} />
                        <div className={"sugest-box"}>
                            
                            {suggestions.map((suggestion, index) => {
                                const style = suggestion.active
                                    ? { backgroundColor: '#f2f2f2', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                
                                return <div key={index}  {...getSuggestionItemProps(suggestion, {
                                    style,
                                    
                                })}><span>{suggestion.description}</span></div>
                            })}
                        </div>
                    </div>
                )}

        </PlacesAutocomplete>

    );
}

export default Input;