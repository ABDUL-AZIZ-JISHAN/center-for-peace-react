
const Error = ({title}) => {
    return (
        <h3 className='m-3 text-center error-title text-danger'>{title || "Something went Wrong."}</h3>
    );
}

export default Error;
