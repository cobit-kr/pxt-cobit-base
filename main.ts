/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9" block="cobit-base"
namespace cobit_base {

	
    /**
	 *  Read ultrasonic sensor 
	 */
    //% weight=90
    //% blockId="cobit-base_readUltraSonic" block="read Ultrasoninc sensor"
    export function readUltraSonic(): number {
        let value = 0
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.pause(2)
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P13, 0)
        value = pins.pulseIn(DigitalPin.P14, PulseValue.High) / 58
        return value
    }


}