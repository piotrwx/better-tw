const Button = (params: {type: string, idParam: string}) => {


    let typeClass = '';
    let typeTitle = '';
    switch (params.type) {
        case 'add':
            typeClass = 'bg-green-200 border-green-600'
            typeTitle = 'Add'
            break;
        case 'edit':
            typeClass = 'bg-blue-200 border-blue-600'
            typeTitle = 'Edit'
            break;
        case 'remove':
            typeClass = 'bg-red-200 border-red-600'
            typeTitle = 'Remove'
            break;
    }

    return (
        <button onClick={() => {}} className={'rounded py-1 px-2 border-2 ' + `${typeClass}`}>
            {typeTitle}
        </button>
    );
}

export default Button;