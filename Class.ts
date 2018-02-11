import { Configurable } from "./Configurable"

export class HiddenClass {

}

export class ActualClass extends Configurable(HiddenClass) {

}