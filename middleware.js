import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["bn", "en", "fr", "es"];
let defaultLocale = "en";

function getLocale(request) {
    const acceptedLanguage = request.headers.get("accept-language") ?? undefined;

    let headers = { 'accept-language': acceptedLanguage };
    let languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}