interface User{
        name: string,
        lastName: string,
        email: string,
        password: string,
        image: string,
        places: Array<Places>
}

interface Places{
    _id:string,
    namePlace: string,
    category: string,
    score: string,
    comment: string,
    country: string,
    city: string,
    street: string,
    number: string,
    images: [string],
    user: User
}

export{User}
