import Link from "next/link";

const Button = (params: {typeButton: string, idParam?: string, classNameElement?: string}) => {

    let typeClass = '';
    let typeTitle = '';
    let typeLink = '';
    const classNameElement = params.classNameElement;

    switch (params.typeButton) {
        case 'save':
            typeClass = 'bg-add'
            typeTitle = 'Save'
            typeLink = ''
            break;
        case 'add':
            typeClass = 'bg-add'
            typeTitle = 'Add'
            typeLink = '/list/add'
            break;
        case 'add-new':
            typeClass = 'bg-add'
            typeTitle = 'Add New'
            typeLink = ''
            break;
        case 'edit':
            typeClass = 'bg-edit'
            typeTitle = 'Edit'
            typeLink = '/list/' + params.idParam + '/edit'
            break;
        case 'remove':
            typeClass = 'bg-remove'
            typeTitle = 'Remove'
            typeLink = '/list/' + params.idParam + '/remove'
            break;
    }

    return typeLink ? (
        <Link href={typeLink} id={ params.idParam} className={classNameElement}>
            <button className={'text-white rounded py-1 px-2 border-2 min-w-[100px] lg:min-w-[200px] ' + `${typeClass}`}>
                {typeTitle}
            </button>
        </Link>
    ) : (
        <button id={params.idParam} className={'text-white rounded py-1 px-2 border-2 min-w-[100px] lg:min-w-[200px] ' + `${typeClass} + ' ' + ${classNameElement}`} type='submit'>
            {typeTitle}
        </button>
    );
}

export default Button;