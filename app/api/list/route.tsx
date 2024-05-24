import {NextResponse} from "next/server";

type ResponseData = {
    data: object
}

export async function GET() {
    // return NextResponse.json({
    //     data: [
    //         {
    //             id: '1',
    //             title: 'task 1',
    //             description: 'Opis zadania numer 1',
    //             status: 'finished'
    //         },
    //         {
    //             id: '4',
    //             title: 'task 2',
    //             description: 'Opis zadania numer 2',
    //             status: 'pending'
    //         },
    //         {
    //             id: '10',
    //             title: 'task 3',
    //             description: 'Opis zadania numer 3',
    //             status: 'new'
    //         }
    //     ]
    // })
}