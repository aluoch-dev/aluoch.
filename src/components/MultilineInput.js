
const MultilineInput = ({label, name, value, onValueChange}) => {
    return (
        <>
            <label htmlFor="message" className="block text-white font-chilanka text-xl mb-2">
                {label}
                </label>
                <textarea
                id="message"
                name={name}
                value={value}
                onChange={onValueChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                rows="6"
                required
                />

        </>
    );
}

export default MultilineInput;