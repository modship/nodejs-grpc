"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakerEntry = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class StakerEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.StakerEntry", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "rolls", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { address: "", rolls: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* uint64 rolls */ 2:
                    message.rolls = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.address);
        /* uint64 rolls = 2; */
        if (message.rolls !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.rolls);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.StakerEntry
 */
exports.StakerEntry = new StakerEntry$Type();
