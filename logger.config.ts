import constants from "@config/constants"

const {development} = constants.ENVIRONMENT


const logger = <T>(log : T): void => {
    if (development) {
        console.log(log)
     }
}


export default logger 