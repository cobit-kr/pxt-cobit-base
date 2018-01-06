enum MotorDirection {
    //% block="CCW"
    CCW = 0,
    //% block="CW"
    CW = 1
}
/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9" block="cobit-base"
namespace cobit_base {

    /**
	 * Run left or right motor to CCW or CW with speed of percent. 
     * @param motor left or right motor 
     * @param direction CCW or CW 
     * @param speed speed as percent
	 */
    //% blockId="cobit_runMotor" block="run motor %direction|at %speed|%"
    //% speed.min=0 speed.max=100
    //% weight=80
    export function runMotor(direction: MotorDirection, speed: number): void {
        let pwr = 0
        speed = Math.abs(speed)
        if (speed > 100) {
            speed = 100
        }

        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }

        if (direction == MotorDirection.CCW) {
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.analogWritePin(AnalogPin.P15, (1024 - pwr))
        } else if (direction == MotorDirection.CW) {
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.analogWritePin(AnalogPin.P15, pwr)
        }

    }
	/**
	 * Stops the motor.
	 */
    //% weight=90
    //% blockId="cobit-base_stopMotor" block="motor stop"
    export function motorStop(): void {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P16, 1)
    }
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