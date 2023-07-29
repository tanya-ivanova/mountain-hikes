export class User {
    constructor(
        public email: string,
        public _id: string,
        private _accessToken: string,
        private _accessTokenExpirationDate: Date,
        public expiresIn: number
    ) { }

    get accessToken() {
        if (!this._accessTokenExpirationDate || new Date() > this._accessTokenExpirationDate) {
            return '';
        }
        return this._accessToken;
    }
}
