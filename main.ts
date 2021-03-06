enum MotorDirection {
    //% block="반시계"
    CCW = 0,
    //% block="시계"
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
    //% blockId="cobit_runMotor" block="DC모터를 %direction|방향으로 %speed|퍼센트로 회전하기"
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
    //% blockId="cobit-base_stopMotor" block="DC모터 멈춤"
    export function motorStop(): void {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
    /**
	 *  Read ultrasonic sensor 
	 */
    //% weight=90
    //% blockId="cobit-base_readUltraSonic" block="초음파센서 읽기"
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

    /**
	 * Moves the servo.
     * @param degree servo rotation degree 
	 */
    //% weight=90
    //% degree.min=0 degree.max=180
    //% blockId="cobit-base_rotateServo" block="서보모터 %degree|도 회전하기"
    export function rotateServo(degree: number): void {
        if (degree > 180) {
            degree = 180
        }
        if (degree < 0) {
            degree = 0
        }
        pins.servoWritePin(AnalogPin.P15, degree)
    }

    /**
	 *  Read IR sensor 
	 */
    //% weight=90
    //% blockId="cobit-base_readIRsensor" block="IR센서 읽기"
    export function readIRsensor(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P8)
        return value
    }

    /**
	 *  Read joystick Y  
	 */
    //% weight=90
    //% blockId="cobit-base_readJoystickY" block="조이스틱 Y축 읽기"
    export function readJoystickY(): number {
        let value = 0
        value = pins.analogReadPin(AnalogPin.P1)
        return value
    }

    /**
	 *  Read joystick X 
	 */
    //% weight=90
    //% blockId="cobit-base_readJoystickX" block="조이스틱 X축 읽기"
    export function readJoystickX(): number {
        let value = 0
        value = pins.analogReadPin(AnalogPin.P2)
        return value
    }

    /**
	 *  Read potentiometer
	 */
    //% weight=90
    //% blockId="cobit-base_readPotentiometer" block="포텐쇼미터 읽기"
    export function readPotentiometer(): number {
        let value = 0
        value = pins.analogReadPin(AnalogPin.P2)
        return value
    }

    /**
	 *  Read soil moisture sensor 
	 */
    //% weight=90
    //% blockId="cobit-base_readMoistureSensor" block="토양수분센서 읽기"
    export function readMoistureSensor(): number {
        let value = 0
        value = pins.analogReadPin(AnalogPin.P1)
        return value
    }


}