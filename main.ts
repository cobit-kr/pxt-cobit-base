/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9" block="cobit-base"
namespace cobit_base {

	
    /**
	 *  Read ultrasonic sensor 
	 */
    //% weight=90
    //% blockId="cobit-base_readUltraSonic" block="read Ultrasoninc sensor with trigger %trigger| and ech %echo|"
    export function readUltraSonic(triggerPin: DigitalPin, echoPin: DigitalPin): number {
        let value = 0
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P1, 0)
        value = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
        return value
    }


}