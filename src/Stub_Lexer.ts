import { CharStream } from './CharStream';
import { Recognizer } from './Stub_Recognizer';
import { Token } from './Token';

export abstract class Lexer extends Recognizer<number, any> {
	static get DEFAULT_TOKEN_CHANNEL(): number {
		return Token.DEFAULT_CHANNEL;
	}

	static get HIDDEN(): number {
		return Token.HIDDEN_CHANNEL;
	}

	setChannel(channel: number): void {
		throw "not implemented";
	}

	setType(type: number): void {
		throw "not implemented";
	}

	pushMode(mode: number): void {
		throw "not implemented";
	}

	popMode(): void {
		throw "not implemented";
	}

	mode(mode: number): void {
		throw "not implemented";
	}

	more(): void {
		throw "not implemented";
	}

	skip(): void {
		throw "not implemented";
	}

	setInputStream(antlrInputStream: CharStream): void { throw new Error("Not implemented"); }

	nextToken(): Token { throw new Error("Not implemented"); }
}

export namespace Lexer {
	export const DEFAULT_MODE: number = 0;
	export const MORE: number = -2;
	export const SKIP: number = -3;

	export const MIN_CHAR_VALUE: number = 0x0000;
	export const MAX_CHAR_VALUE: number = 0xFFFE;
}