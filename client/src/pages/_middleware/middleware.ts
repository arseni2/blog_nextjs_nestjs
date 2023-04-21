import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    //connect.sid
    let cookie = request.cookies.get('connect.sid')
    console.log(cookie)
    if(!cookie) return NextResponse.redirect(new URL('/auth/login', request.url))
    return NextResponse.next()
}
export const config = {
    matcher: ['/', '/create']
}