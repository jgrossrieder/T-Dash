export interface AstroSign {
    name: string;
    order: number;
    technicalName: string;
    start: Date;
    end: Date;
}
export interface HoroscopeTopic {
    title: string;
    totalStars: number;
    stars: number;
}

export interface Horoscope {
    sign: AstroSign;
    globalText: string;
    topics: HoroscopeTopic[];
}