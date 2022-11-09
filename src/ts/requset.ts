// private sendRequest(url, req, abilityId ?: string | { [key: string]: string }, options ?): Promise < any > {
//     return new Promise((resolve, reject) => {
//         this.PermissionList = JSON.parse(sessionStorage.getItem('hag-permisson'));
//         this.AuthenticatorAssertionResponse(url, this.PermissionList).then(res => {
//             if (res) {
//                 this.parseInt.sendRequestSDK(url, req, this.FormData, abilityId, options).then(resp => {
//                     resolve(resp);
//                 }).catch(errorData => {
//                     reject(errorData)
//                 })
//             } else {
//                 this.antiShake();
//                 reject({
//                     code: 400,
//                     msg: 'Authentication error',
//                     data: ress
//                 })
//             }
//         })
//     })
// }