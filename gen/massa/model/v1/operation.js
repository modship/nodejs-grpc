"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpTypes = exports.OperationIds = exports.OperationInfo = exports.OperationWrapper = exports.SignedOperation = exports.CallSC = exports.ExecuteSC = exports.RollSell = exports.RollBuy = exports.Transaction = exports.OperationType = exports.Operation = exports.OpType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const commons_1 = require("./commons");
const amount_1 = require("./amount");
/**
 * Operation type enum
 *
 * @generated from protobuf enum massa.model.v1.OpType
 */
var OpType;
(function (OpType) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: OP_TYPE_UNSPECIFIED = 0;
     */
    OpType[OpType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Transaction
     *
     * @generated from protobuf enum value: OP_TYPE_TRANSACTION = 1;
     */
    OpType[OpType["TRANSACTION"] = 1] = "TRANSACTION";
    /**
     * Roll buy
     *
     * @generated from protobuf enum value: OP_TYPE_ROLL_BUY = 2;
     */
    OpType[OpType["ROLL_BUY"] = 2] = "ROLL_BUY";
    /**
     * Roll sell
     *
     * @generated from protobuf enum value: OP_TYPE_ROLL_SELL = 3;
     */
    OpType[OpType["ROLL_SELL"] = 3] = "ROLL_SELL";
    /**
     * Execute smart contract
     *
     * @generated from protobuf enum value: OP_TYPE_EXECUTE_SC = 4;
     */
    OpType[OpType["EXECUTE_SC"] = 4] = "EXECUTE_SC";
    /**
     * Call smart contract
     *
     * @generated from protobuf enum value: OP_TYPE_CALL_SC = 5;
     */
    OpType[OpType["CALL_SC"] = 5] = "CALL_SC";
})(OpType || (exports.OpType = OpType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Operation$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Operation", [
            { no: 1, name: "fee", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "expire_period", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "op", kind: "message", T: () => exports.OperationType }
        ]);
    }
    create(value) {
        const message = { expirePeriod: 0n };
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
                case /* massa.model.v1.NativeAmount fee */ 1:
                    message.fee = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.fee);
                    break;
                case /* uint64 expire_period */ 2:
                    message.expirePeriod = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.OperationType op */ 3:
                    message.op = exports.OperationType.internalBinaryRead(reader, reader.uint32(), options, message.op);
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
        /* massa.model.v1.NativeAmount fee = 1; */
        if (message.fee)
            amount_1.NativeAmount.internalBinaryWrite(message.fee, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 expire_period = 2; */
        if (message.expirePeriod !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.expirePeriod);
        /* massa.model.v1.OperationType op = 3; */
        if (message.op)
            exports.OperationType.internalBinaryWrite(message.op, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Operation
 */
exports.Operation = new Operation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OperationType$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.OperationType", [
            { no: 1, name: "transaction", kind: "message", oneof: "type", T: () => exports.Transaction },
            { no: 2, name: "roll_buy", kind: "message", oneof: "type", T: () => exports.RollBuy },
            { no: 3, name: "roll_sell", kind: "message", oneof: "type", T: () => exports.RollSell },
            { no: 4, name: "execut_sc", kind: "message", oneof: "type", T: () => exports.ExecuteSC },
            { no: 5, name: "call_sc", kind: "message", oneof: "type", T: () => exports.CallSC }
        ]);
    }
    create(value) {
        const message = { type: { oneofKind: undefined } };
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
                case /* massa.model.v1.Transaction transaction */ 1:
                    message.type = {
                        oneofKind: "transaction",
                        transaction: exports.Transaction.internalBinaryRead(reader, reader.uint32(), options, message.type.transaction)
                    };
                    break;
                case /* massa.model.v1.RollBuy roll_buy */ 2:
                    message.type = {
                        oneofKind: "rollBuy",
                        rollBuy: exports.RollBuy.internalBinaryRead(reader, reader.uint32(), options, message.type.rollBuy)
                    };
                    break;
                case /* massa.model.v1.RollSell roll_sell */ 3:
                    message.type = {
                        oneofKind: "rollSell",
                        rollSell: exports.RollSell.internalBinaryRead(reader, reader.uint32(), options, message.type.rollSell)
                    };
                    break;
                case /* massa.model.v1.ExecuteSC execut_sc */ 4:
                    message.type = {
                        oneofKind: "executSc",
                        executSc: exports.ExecuteSC.internalBinaryRead(reader, reader.uint32(), options, message.type.executSc)
                    };
                    break;
                case /* massa.model.v1.CallSC call_sc */ 5:
                    message.type = {
                        oneofKind: "callSc",
                        callSc: exports.CallSC.internalBinaryRead(reader, reader.uint32(), options, message.type.callSc)
                    };
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
        /* massa.model.v1.Transaction transaction = 1; */
        if (message.type.oneofKind === "transaction")
            exports.Transaction.internalBinaryWrite(message.type.transaction, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.RollBuy roll_buy = 2; */
        if (message.type.oneofKind === "rollBuy")
            exports.RollBuy.internalBinaryWrite(message.type.rollBuy, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.RollSell roll_sell = 3; */
        if (message.type.oneofKind === "rollSell")
            exports.RollSell.internalBinaryWrite(message.type.rollSell, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.ExecuteSC execut_sc = 4; */
        if (message.type.oneofKind === "executSc")
            exports.ExecuteSC.internalBinaryWrite(message.type.executSc, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.CallSC call_sc = 5; */
        if (message.type.oneofKind === "callSc")
            exports.CallSC.internalBinaryWrite(message.type.callSc, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.OperationType
 */
exports.OperationType = new OperationType$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Transaction$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Transaction", [
            { no: 1, name: "recipient_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "amount", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = { recipientAddress: "" };
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
                case /* string recipient_address */ 1:
                    message.recipientAddress = reader.string();
                    break;
                case /* massa.model.v1.NativeAmount amount */ 2:
                    message.amount = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.amount);
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
        /* string recipient_address = 1; */
        if (message.recipientAddress !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.recipientAddress);
        /* massa.model.v1.NativeAmount amount = 2; */
        if (message.amount)
            amount_1.NativeAmount.internalBinaryWrite(message.amount, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Transaction
 */
exports.Transaction = new Transaction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RollBuy$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.RollBuy", [
            { no: 1, name: "roll_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { rollCount: 0n };
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
                case /* uint64 roll_count */ 1:
                    message.rollCount = reader.uint64().toBigInt();
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
        /* uint64 roll_count = 1; */
        if (message.rollCount !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.rollCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.RollBuy
 */
exports.RollBuy = new RollBuy$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RollSell$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.RollSell", [
            { no: 1, name: "roll_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { rollCount: 0n };
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
                case /* uint64 roll_count */ 1:
                    message.rollCount = reader.uint64().toBigInt();
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
        /* uint64 roll_count = 1; */
        if (message.rollCount !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.rollCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.RollSell
 */
exports.RollSell = new RollSell$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteSC$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ExecuteSC", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "max_coins", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "max_gas", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "datastore", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => commons_1.BytesMapFieldEntry }
        ]);
    }
    create(value) {
        const message = { data: new Uint8Array(0), maxCoins: 0n, maxGas: 0n, datastore: [] };
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
                case /* bytes data */ 1:
                    message.data = reader.bytes();
                    break;
                case /* uint64 max_coins */ 2:
                    message.maxCoins = reader.uint64().toBigInt();
                    break;
                case /* uint64 max_gas */ 3:
                    message.maxGas = reader.uint64().toBigInt();
                    break;
                case /* repeated massa.model.v1.BytesMapFieldEntry datastore */ 4:
                    message.datastore.push(commons_1.BytesMapFieldEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bytes data = 1; */
        if (message.data.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.data);
        /* uint64 max_coins = 2; */
        if (message.maxCoins !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.maxCoins);
        /* uint64 max_gas = 3; */
        if (message.maxGas !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.maxGas);
        /* repeated massa.model.v1.BytesMapFieldEntry datastore = 4; */
        for (let i = 0; i < message.datastore.length; i++)
            commons_1.BytesMapFieldEntry.internalBinaryWrite(message.datastore[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ExecuteSC
 */
exports.ExecuteSC = new ExecuteSC$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallSC$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.CallSC", [
            { no: 1, name: "target_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "target_function", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "parameter", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "max_gas", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "coins", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = { targetAddress: "", targetFunction: "", parameter: new Uint8Array(0), maxGas: 0n };
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
                case /* string target_address */ 1:
                    message.targetAddress = reader.string();
                    break;
                case /* string target_function */ 2:
                    message.targetFunction = reader.string();
                    break;
                case /* bytes parameter */ 3:
                    message.parameter = reader.bytes();
                    break;
                case /* uint64 max_gas */ 4:
                    message.maxGas = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.NativeAmount coins */ 5:
                    message.coins = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.coins);
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
        /* string target_address = 1; */
        if (message.targetAddress !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.targetAddress);
        /* string target_function = 2; */
        if (message.targetFunction !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.targetFunction);
        /* bytes parameter = 3; */
        if (message.parameter.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.parameter);
        /* uint64 max_gas = 4; */
        if (message.maxGas !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.maxGas);
        /* massa.model.v1.NativeAmount coins = 5; */
        if (message.coins)
            amount_1.NativeAmount.internalBinaryWrite(message.coins, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.CallSC
 */
exports.CallSC = new CallSC$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignedOperation$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SignedOperation", [
            { no: 1, name: "content", kind: "message", T: () => exports.Operation },
            { no: 2, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "content_creator_pub_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "content_creator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "secure_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "serialized_size", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { signature: "", contentCreatorPubKey: "", contentCreatorAddress: "", secureHash: "", serializedSize: 0n };
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
                case /* massa.model.v1.Operation content */ 1:
                    message.content = exports.Operation.internalBinaryRead(reader, reader.uint32(), options, message.content);
                    break;
                case /* string signature */ 2:
                    message.signature = reader.string();
                    break;
                case /* string content_creator_pub_key */ 3:
                    message.contentCreatorPubKey = reader.string();
                    break;
                case /* string content_creator_address */ 4:
                    message.contentCreatorAddress = reader.string();
                    break;
                case /* string secure_hash */ 5:
                    message.secureHash = reader.string();
                    break;
                case /* uint64 serialized_size */ 6:
                    message.serializedSize = reader.uint64().toBigInt();
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
        /* massa.model.v1.Operation content = 1; */
        if (message.content)
            exports.Operation.internalBinaryWrite(message.content, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string signature = 2; */
        if (message.signature !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* string content_creator_pub_key = 3; */
        if (message.contentCreatorPubKey !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.contentCreatorPubKey);
        /* string content_creator_address = 4; */
        if (message.contentCreatorAddress !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.contentCreatorAddress);
        /* string secure_hash = 5; */
        if (message.secureHash !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.secureHash);
        /* uint64 serialized_size = 6; */
        if (message.serializedSize !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.serializedSize);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SignedOperation
 */
exports.SignedOperation = new SignedOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OperationWrapper$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.OperationWrapper", [
            { no: 1, name: "block_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "thread", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "operation", kind: "message", T: () => exports.SignedOperation }
        ]);
    }
    create(value) {
        const message = { blockIds: [], thread: 0 };
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
                case /* repeated string block_ids */ 1:
                    message.blockIds.push(reader.string());
                    break;
                case /* uint32 thread */ 2:
                    message.thread = reader.uint32();
                    break;
                case /* massa.model.v1.SignedOperation operation */ 3:
                    message.operation = exports.SignedOperation.internalBinaryRead(reader, reader.uint32(), options, message.operation);
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
        /* repeated string block_ids = 1; */
        for (let i = 0; i < message.blockIds.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.blockIds[i]);
        /* uint32 thread = 2; */
        if (message.thread !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.thread);
        /* massa.model.v1.SignedOperation operation = 3; */
        if (message.operation)
            exports.SignedOperation.internalBinaryWrite(message.operation, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.OperationWrapper
 */
exports.OperationWrapper = new OperationWrapper$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OperationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.OperationInfo", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "block_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "thread", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { id: "", blockIds: [], thread: 0 };
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
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* repeated string block_ids */ 2:
                    message.blockIds.push(reader.string());
                    break;
                case /* uint32 thread */ 3:
                    message.thread = reader.uint32();
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
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.id);
        /* repeated string block_ids = 2; */
        for (let i = 0; i < message.blockIds.length; i++)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.blockIds[i]);
        /* uint32 thread = 3; */
        if (message.thread !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.thread);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.OperationInfo
 */
exports.OperationInfo = new OperationInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OperationIds$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.OperationIds", [
            { no: 1, name: "operation_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { operationIds: [] };
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
                case /* repeated string operation_ids */ 1:
                    message.operationIds.push(reader.string());
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
        /* repeated string operation_ids = 1; */
        for (let i = 0; i < message.operationIds.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.operationIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.OperationIds
 */
exports.OperationIds = new OperationIds$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpTypes$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.OpTypes", [
            { no: 1, name: "op_types", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["massa.model.v1.OpType", OpType, "OP_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { opTypes: [] };
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
                case /* repeated massa.model.v1.OpType op_types */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.opTypes.push(reader.int32());
                    else
                        message.opTypes.push(reader.int32());
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
        /* repeated massa.model.v1.OpType op_types = 1; */
        if (message.opTypes.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.opTypes.length; i++)
                writer.int32(message.opTypes[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.OpTypes
 */
exports.OpTypes = new OpTypes$Type();
