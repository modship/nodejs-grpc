"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareAddressRequest = exports.CompareNativeTimeResult = exports.CompareNativeTimeRequest = exports.CheckedDivRemNativeTimeResult = exports.CheckedDivRemNativeTimeRequest = exports.CheckedScalarDivRemNativeTimeResult = exports.CheckedScalarDivRemNativeTimeRequest = exports.CheckedScalarMulNativeTimeResult = exports.CheckedScalarMulNativeTimeRequest = exports.CheckedSubNativeTimeResult = exports.CheckedSubNativeTimeRequest = exports.CheckedAddNativeTimeResult = exports.CheckedAddNativeTimeRequest = exports.DivRemNativeAmountResult = exports.DivRemNativeAmountRequest = exports.ScalarDivRemNativeAmountResult = exports.ScalarDivRemNativeAmountRequest = exports.ScalarMulNativeAmountResult = exports.ScalarMulNativeAmountRequest = exports.SubNativeAmountResult = exports.SubNativeAmountRequest = exports.AddNativeAmountResult = exports.AddNativeAmountRequest = exports.CheckNativeAmountResult = exports.CheckNativeAmountRequest = exports.CheckSigResult = exports.CheckSigRequest = exports.CheckPubKeyResult = exports.CheckPubKeyRequest = exports.CheckAddressResult = exports.CheckAddressRequest = exports.NativeAmountFromStringResult = exports.NativeAmountFromStringRequest = exports.NativeAmountToStringResult = exports.NativeAmountToStringRequest = exports.AbiResponse = exports.RespResult = exports.FunctionExistsResult = exports.FunctionExistsRequest = exports.TransferCoinsResult = exports.TransferCoinsRequest = exports.GenerateEventResult = exports.GenerateEventRequest = exports.LocalExecutionResponse = exports.LocalExecutionRequest = exports.CallResponse = exports.CallRequest = exports.CreateScResult = exports.CreateScRequest = exports.Error = void 0;
exports.SetBytecodeResult = exports.SetBytecodeRequest = exports.GetCurrentSlotResult = exports.GetCurrentSlotRequest = exports.GetNativeTimeResult = exports.GetNativeTimeRequest = exports.GetOriginOperationIdResult = exports.GetOriginOperationIdRequest = exports.SendAsyncMessageResult = exports.SendAsyncMessageRequest = exports.SendAsyncMessageFilter = exports.UnsafeRandomResult = exports.UnsafeRandomRequest = exports.AddressFromPubKeyResult = exports.AddressFromPubKeyRequest = exports.GetCallStackResult = exports.GetCallStackRequest = exports.GetOwnedAddressesResult = exports.GetOwnedAddressesRequest = exports.DsEntryExistsResult = exports.DsEntryExistsRequest = exports.DeleteDsEntryResult = exports.DeleteDsEntryRequest = exports.GetDsValueResult = exports.GetDsValueRequest = exports.AppendDsValueResult = exports.AppendDsValueRequest = exports.SetDsValueResult = exports.SetDsValueRequest = exports.GetDsKeysResult = exports.GetDsKeysRequest = exports.HashBlake3Result = exports.HashBlake3Request = exports.IsAddressEoaResult = exports.IsAddressEoaRequest = exports.EvmGetPubkeyFromSignatureResult = exports.EvmGetPubkeyFromSignatureRequest = exports.EvmGetAddressFromPubkeyResult = exports.EvmGetAddressFromPubkeyRequest = exports.EvmVerifySigResult = exports.EvmVerifySigRequest = exports.Keccak256Result = exports.Keccak256Request = exports.CompareNativeAmountResult = exports.CompareNativeAmountRequest = exports.VerifySigResult = exports.VerifySigRequest = exports.ComparePubKeyResult = exports.ComparePubKeyRequest = exports.CompareAddressResult = void 0;
exports.Base58CheckToBytesResult = exports.Base58CheckToBytesRequest = exports.BytesToBase58CheckResult = exports.BytesToBase58CheckRequest = exports.GetSignatureVersionResult = exports.GetSignatureVersionRequest = exports.GetPubKeyVersionResult = exports.GetPubKeyVersionRequest = exports.GetAddressCategoryResult = exports.GetAddressCategoryRequest = exports.GetAddressVersionResult = exports.GetAddressVersionRequest = exports.GetCallCoinsResult = exports.GetCallCoinsRequest = exports.GetBalanceResult = exports.GetBalanceRequest = exports.GetRemainingGasResult = exports.GetRemainingGasRequest = exports.GetOpKeysResult = exports.GetOpKeysRequest = exports.OpEntryExistsResult = exports.OpEntryExistsRequest = exports.GetOpDataResult = exports.GetOpDataRequest = exports.HashSha256Result = exports.HashSha256Request = exports.CallerHasWriteAccessResult = exports.CallerHasWriteAccessRequest = exports.GetBytecodeResult = exports.GetBytecodeRequest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const address_1 = require("../../model/v1/address");
const slot_1 = require("../../model/v1/slot");
const wrappers_1 = require("../../../google/protobuf/wrappers");
const commons_1 = require("../../model/v1/commons");
const time_1 = require("../../model/v1/time");
const wrappers_2 = require("../../../google/protobuf/wrappers");
const amount_1 = require("../../model/v1/amount");
// @generated message type with reflection information, may provide speed optimized methods
class Error$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.Error", [
            { no: 1, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { message: "" };
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
                case /* string message */ 1:
                    message.message = reader.string();
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
        /* string message = 1; */
        if (message.message !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.Error
 */
exports.Error = new Error$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateScRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CreateScRequest", [
            { no: 1, name: "bytecode", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { bytecode: new Uint8Array(0) };
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
                case /* bytes bytecode */ 1:
                    message.bytecode = reader.bytes();
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
        /* bytes bytecode = 1; */
        if (message.bytecode.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.bytecode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CreateScRequest
 */
exports.CreateScRequest = new CreateScRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateScResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CreateScResult", [
            { no: 1, name: "sc_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { scAddress: "" };
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
                case /* string sc_address */ 1:
                    message.scAddress = reader.string();
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
        /* string sc_address = 1; */
        if (message.scAddress !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.scAddress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CreateScResult
 */
exports.CreateScResult = new CreateScResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CallRequest", [
            { no: 1, name: "target_sc_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "target_function_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "function_arg", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "call_coins", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = { targetScAddress: "", targetFunctionName: "", functionArg: new Uint8Array(0) };
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
                case /* string target_sc_address */ 1:
                    message.targetScAddress = reader.string();
                    break;
                case /* string target_function_name */ 2:
                    message.targetFunctionName = reader.string();
                    break;
                case /* bytes function_arg */ 3:
                    message.functionArg = reader.bytes();
                    break;
                case /* massa.model.v1.NativeAmount call_coins */ 4:
                    message.callCoins = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.callCoins);
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
        /* string target_sc_address = 1; */
        if (message.targetScAddress !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.targetScAddress);
        /* string target_function_name = 2; */
        if (message.targetFunctionName !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.targetFunctionName);
        /* bytes function_arg = 3; */
        if (message.functionArg.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.functionArg);
        /* massa.model.v1.NativeAmount call_coins = 4; */
        if (message.callCoins)
            amount_1.NativeAmount.internalBinaryWrite(message.callCoins, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CallRequest
 */
exports.CallRequest = new CallRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CallResponse", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { data: new Uint8Array(0) };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CallResponse
 */
exports.CallResponse = new CallResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LocalExecutionRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.LocalExecutionRequest", [
            { no: 1, name: "bytecode", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "target_function_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "function_arg", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { bytecode: new Uint8Array(0), targetFunctionName: "", functionArg: new Uint8Array(0) };
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
                case /* bytes bytecode */ 1:
                    message.bytecode = reader.bytes();
                    break;
                case /* string target_function_name */ 2:
                    message.targetFunctionName = reader.string();
                    break;
                case /* bytes function_arg */ 3:
                    message.functionArg = reader.bytes();
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
        /* bytes bytecode = 1; */
        if (message.bytecode.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.bytecode);
        /* string target_function_name = 2; */
        if (message.targetFunctionName !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.targetFunctionName);
        /* bytes function_arg = 3; */
        if (message.functionArg.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.functionArg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.LocalExecutionRequest
 */
exports.LocalExecutionRequest = new LocalExecutionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LocalExecutionResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.LocalExecutionResponse", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { data: new Uint8Array(0) };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.LocalExecutionResponse
 */
exports.LocalExecutionResponse = new LocalExecutionResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GenerateEventRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GenerateEventRequest", [
            { no: 1, name: "event", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { event: new Uint8Array(0) };
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
                case /* bytes event */ 1:
                    message.event = reader.bytes();
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
        /* bytes event = 1; */
        if (message.event.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.event);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GenerateEventRequest
 */
exports.GenerateEventRequest = new GenerateEventRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GenerateEventResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GenerateEventResult", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GenerateEventResult
 */
exports.GenerateEventResult = new GenerateEventResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TransferCoinsRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.TransferCoinsRequest", [
            { no: 1, name: "target_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "amount_to_transfer", kind: "message", T: () => amount_1.NativeAmount },
            { no: 3, name: "sender_address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { targetAddress: "" };
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
                case /* massa.model.v1.NativeAmount amount_to_transfer */ 2:
                    message.amountToTransfer = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.amountToTransfer);
                    break;
                case /* optional google.protobuf.StringValue sender_address */ 3:
                    message.senderAddress = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.senderAddress);
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
        /* massa.model.v1.NativeAmount amount_to_transfer = 2; */
        if (message.amountToTransfer)
            amount_1.NativeAmount.internalBinaryWrite(message.amountToTransfer, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.StringValue sender_address = 3; */
        if (message.senderAddress)
            wrappers_2.StringValue.internalBinaryWrite(message.senderAddress, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.TransferCoinsRequest
 */
exports.TransferCoinsRequest = new TransferCoinsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TransferCoinsResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.TransferCoinsResult", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.TransferCoinsResult
 */
exports.TransferCoinsResult = new TransferCoinsResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FunctionExistsRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.FunctionExistsRequest", [
            { no: 1, name: "target_sc_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "function_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { targetScAddress: "", functionName: "" };
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
                case /* string target_sc_address */ 1:
                    message.targetScAddress = reader.string();
                    break;
                case /* string function_name */ 2:
                    message.functionName = reader.string();
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
        /* string target_sc_address = 1; */
        if (message.targetScAddress !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.targetScAddress);
        /* string function_name = 2; */
        if (message.functionName !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.functionName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.FunctionExistsRequest
 */
exports.FunctionExistsRequest = new FunctionExistsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FunctionExistsResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.FunctionExistsResult", [
            { no: 1, name: "exists", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { exists: false };
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
                case /* bool exists */ 1:
                    message.exists = reader.bool();
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
        /* bool exists = 1; */
        if (message.exists !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.exists);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.FunctionExistsResult
 */
exports.FunctionExistsResult = new FunctionExistsResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RespResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.RespResult", [
            { no: 1, name: "add_native_amount_result", kind: "message", oneof: "res", T: () => exports.AddNativeAmountResult },
            { no: 2, name: "address_from_pub_key_result", kind: "message", oneof: "res", T: () => exports.AddressFromPubKeyResult },
            { no: 3, name: "append_ds_value_result", kind: "message", oneof: "res", T: () => exports.AppendDsValueResult },
            { no: 4, name: "base58_check_to_bytes_result", kind: "message", oneof: "res", T: () => exports.Base58CheckToBytesResult },
            { no: 5, name: "bytes_to_base58_check_result", kind: "message", oneof: "res", T: () => exports.BytesToBase58CheckResult },
            { no: 6, name: "caller_has_write_access_result", kind: "message", oneof: "res", T: () => exports.CallerHasWriteAccessResult },
            { no: 7, name: "check_address_result", kind: "message", oneof: "res", T: () => exports.CheckAddressResult },
            { no: 8, name: "check_native_amount_result", kind: "message", oneof: "res", T: () => exports.CheckNativeAmountResult },
            { no: 9, name: "check_pub_key_result", kind: "message", oneof: "res", T: () => exports.CheckPubKeyResult },
            { no: 10, name: "check_sig_result", kind: "message", oneof: "res", T: () => exports.CheckSigResult },
            { no: 11, name: "checked_add_native_time_result", kind: "message", oneof: "res", T: () => exports.CheckedAddNativeTimeResult },
            { no: 12, name: "checked_div_rem_native_time_result", kind: "message", oneof: "res", T: () => exports.CheckedDivRemNativeTimeResult },
            { no: 13, name: "checked_scalar_div_rem_native_time_result", kind: "message", oneof: "res", T: () => exports.CheckedScalarDivRemNativeTimeResult },
            { no: 14, name: "checked_scalar_mul_native_time_result", kind: "message", oneof: "res", T: () => exports.CheckedScalarMulNativeTimeResult },
            { no: 15, name: "checked_sub_native_time_result", kind: "message", oneof: "res", T: () => exports.CheckedSubNativeTimeResult },
            { no: 16, name: "compare_address_result", kind: "message", oneof: "res", T: () => exports.CompareAddressResult },
            { no: 17, name: "compare_native_amount_result", kind: "message", oneof: "res", T: () => exports.CompareNativeAmountResult },
            { no: 18, name: "compare_native_time_result", kind: "message", oneof: "res", T: () => exports.CompareNativeTimeResult },
            { no: 19, name: "compare_pub_key_result", kind: "message", oneof: "res", T: () => exports.ComparePubKeyResult },
            { no: 20, name: "create_sc_result", kind: "message", oneof: "res", T: () => exports.CreateScResult },
            { no: 21, name: "delete_ds_entry_result", kind: "message", oneof: "res", T: () => exports.DeleteDsEntryResult },
            { no: 22, name: "div_rem_native_amount_result", kind: "message", oneof: "res", T: () => exports.DivRemNativeAmountResult },
            { no: 23, name: "ds_entry_exists_result", kind: "message", oneof: "res", T: () => exports.DsEntryExistsResult },
            { no: 24, name: "function_exists_result", kind: "message", oneof: "res", T: () => exports.FunctionExistsResult },
            { no: 25, name: "generate_event_result", kind: "message", oneof: "res", T: () => exports.GenerateEventResult },
            { no: 26, name: "get_address_category_result", kind: "message", oneof: "res", T: () => exports.GetAddressCategoryResult },
            { no: 27, name: "get_address_version_result", kind: "message", oneof: "res", T: () => exports.GetAddressVersionResult },
            { no: 28, name: "get_balance_result", kind: "message", oneof: "res", T: () => exports.GetBalanceResult },
            { no: 29, name: "get_bytecode_result", kind: "message", oneof: "res", T: () => exports.GetBytecodeResult },
            { no: 30, name: "get_call_coins_result", kind: "message", oneof: "res", T: () => exports.GetCallCoinsResult },
            { no: 31, name: "get_call_stack_result", kind: "message", oneof: "res", T: () => exports.GetCallStackResult },
            { no: 32, name: "get_current_slot_result", kind: "message", oneof: "res", T: () => exports.GetCurrentSlotResult },
            { no: 33, name: "get_ds_keys_result", kind: "message", oneof: "res", T: () => exports.GetDsKeysResult },
            { no: 34, name: "get_ds_value_result", kind: "message", oneof: "res", T: () => exports.GetDsValueResult },
            { no: 35, name: "get_native_time_result", kind: "message", oneof: "res", T: () => exports.GetNativeTimeResult },
            { no: 36, name: "get_op_data_result", kind: "message", oneof: "res", T: () => exports.GetOpDataResult },
            { no: 37, name: "get_op_keys_result", kind: "message", oneof: "res", T: () => exports.GetOpKeysResult },
            { no: 38, name: "get_origin_operation_id_result", kind: "message", oneof: "res", T: () => exports.GetOriginOperationIdResult },
            { no: 39, name: "get_owned_addresses_result", kind: "message", oneof: "res", T: () => exports.GetOwnedAddressesResult },
            { no: 40, name: "get_pub_key_version_result", kind: "message", oneof: "res", T: () => exports.GetPubKeyVersionResult },
            { no: 41, name: "get_remaining_gas_result", kind: "message", oneof: "res", T: () => exports.GetRemainingGasResult },
            { no: 42, name: "get_signature_version_result", kind: "message", oneof: "res", T: () => exports.GetSignatureVersionResult },
            { no: 43, name: "hash_blake3_result", kind: "message", oneof: "res", T: () => exports.HashBlake3Result },
            { no: 44, name: "hash_sha256_result", kind: "message", oneof: "res", T: () => exports.HashSha256Result },
            { no: 45, name: "op_entry_exists_result", kind: "message", oneof: "res", T: () => exports.OpEntryExistsResult },
            { no: 46, name: "keccak256_result", kind: "message", oneof: "res", T: () => exports.Keccak256Result },
            { no: 47, name: "local_execution_response", kind: "message", oneof: "res", T: () => exports.LocalExecutionResponse },
            { no: 48, name: "native_amount_from_string_result", kind: "message", oneof: "res", T: () => exports.NativeAmountFromStringResult },
            { no: 49, name: "native_amount_to_string_result", kind: "message", oneof: "res", T: () => exports.NativeAmountToStringResult },
            { no: 50, name: "scalar_div_rem_native_amount_result", kind: "message", oneof: "res", T: () => exports.ScalarDivRemNativeAmountResult },
            { no: 51, name: "scalar_mul_native_amount_result", kind: "message", oneof: "res", T: () => exports.ScalarMulNativeAmountResult },
            { no: 52, name: "send_async_message_result", kind: "message", oneof: "res", T: () => exports.SendAsyncMessageResult },
            { no: 53, name: "set_bytecode_result", kind: "message", oneof: "res", T: () => exports.SetBytecodeResult },
            { no: 54, name: "set_ds_value_result", kind: "message", oneof: "res", T: () => exports.SetDsValueResult },
            { no: 55, name: "sub_native_amount_result", kind: "message", oneof: "res", T: () => exports.SubNativeAmountResult },
            { no: 56, name: "transfer_coins_result", kind: "message", oneof: "res", T: () => exports.TransferCoinsResult },
            { no: 57, name: "unsafe_random_result", kind: "message", oneof: "res", T: () => exports.UnsafeRandomResult },
            { no: 58, name: "evm_verify_sig_result", kind: "message", oneof: "res", T: () => exports.EvmVerifySigResult },
            { no: 59, name: "verify_sig_result", kind: "message", oneof: "res", T: () => exports.VerifySigResult },
            { no: 60, name: "evm_get_address_from_pubkey_result", kind: "message", oneof: "res", T: () => exports.EvmGetAddressFromPubkeyResult },
            { no: 61, name: "evm_get_pubkey_from_signature_result", kind: "message", oneof: "res", T: () => exports.EvmGetPubkeyFromSignatureResult },
            { no: 62, name: "is_address_eoa_result", kind: "message", oneof: "res", T: () => exports.IsAddressEoaResult }
        ]);
    }
    create(value) {
        const message = { res: { oneofKind: undefined } };
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
                case /* massa.abi.v1.AddNativeAmountResult add_native_amount_result */ 1:
                    message.res = {
                        oneofKind: "addNativeAmountResult",
                        addNativeAmountResult: exports.AddNativeAmountResult.internalBinaryRead(reader, reader.uint32(), options, message.res.addNativeAmountResult)
                    };
                    break;
                case /* massa.abi.v1.AddressFromPubKeyResult address_from_pub_key_result */ 2:
                    message.res = {
                        oneofKind: "addressFromPubKeyResult",
                        addressFromPubKeyResult: exports.AddressFromPubKeyResult.internalBinaryRead(reader, reader.uint32(), options, message.res.addressFromPubKeyResult)
                    };
                    break;
                case /* massa.abi.v1.AppendDsValueResult append_ds_value_result */ 3:
                    message.res = {
                        oneofKind: "appendDsValueResult",
                        appendDsValueResult: exports.AppendDsValueResult.internalBinaryRead(reader, reader.uint32(), options, message.res.appendDsValueResult)
                    };
                    break;
                case /* massa.abi.v1.Base58CheckToBytesResult base58_check_to_bytes_result */ 4:
                    message.res = {
                        oneofKind: "base58CheckToBytesResult",
                        base58CheckToBytesResult: exports.Base58CheckToBytesResult.internalBinaryRead(reader, reader.uint32(), options, message.res.base58CheckToBytesResult)
                    };
                    break;
                case /* massa.abi.v1.BytesToBase58CheckResult bytes_to_base58_check_result */ 5:
                    message.res = {
                        oneofKind: "bytesToBase58CheckResult",
                        bytesToBase58CheckResult: exports.BytesToBase58CheckResult.internalBinaryRead(reader, reader.uint32(), options, message.res.bytesToBase58CheckResult)
                    };
                    break;
                case /* massa.abi.v1.CallerHasWriteAccessResult caller_has_write_access_result */ 6:
                    message.res = {
                        oneofKind: "callerHasWriteAccessResult",
                        callerHasWriteAccessResult: exports.CallerHasWriteAccessResult.internalBinaryRead(reader, reader.uint32(), options, message.res.callerHasWriteAccessResult)
                    };
                    break;
                case /* massa.abi.v1.CheckAddressResult check_address_result */ 7:
                    message.res = {
                        oneofKind: "checkAddressResult",
                        checkAddressResult: exports.CheckAddressResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkAddressResult)
                    };
                    break;
                case /* massa.abi.v1.CheckNativeAmountResult check_native_amount_result */ 8:
                    message.res = {
                        oneofKind: "checkNativeAmountResult",
                        checkNativeAmountResult: exports.CheckNativeAmountResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkNativeAmountResult)
                    };
                    break;
                case /* massa.abi.v1.CheckPubKeyResult check_pub_key_result */ 9:
                    message.res = {
                        oneofKind: "checkPubKeyResult",
                        checkPubKeyResult: exports.CheckPubKeyResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkPubKeyResult)
                    };
                    break;
                case /* massa.abi.v1.CheckSigResult check_sig_result */ 10:
                    message.res = {
                        oneofKind: "checkSigResult",
                        checkSigResult: exports.CheckSigResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkSigResult)
                    };
                    break;
                case /* massa.abi.v1.CheckedAddNativeTimeResult checked_add_native_time_result */ 11:
                    message.res = {
                        oneofKind: "checkedAddNativeTimeResult",
                        checkedAddNativeTimeResult: exports.CheckedAddNativeTimeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkedAddNativeTimeResult)
                    };
                    break;
                case /* massa.abi.v1.CheckedDivRemNativeTimeResult checked_div_rem_native_time_result */ 12:
                    message.res = {
                        oneofKind: "checkedDivRemNativeTimeResult",
                        checkedDivRemNativeTimeResult: exports.CheckedDivRemNativeTimeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkedDivRemNativeTimeResult)
                    };
                    break;
                case /* massa.abi.v1.CheckedScalarDivRemNativeTimeResult checked_scalar_div_rem_native_time_result */ 13:
                    message.res = {
                        oneofKind: "checkedScalarDivRemNativeTimeResult",
                        checkedScalarDivRemNativeTimeResult: exports.CheckedScalarDivRemNativeTimeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkedScalarDivRemNativeTimeResult)
                    };
                    break;
                case /* massa.abi.v1.CheckedScalarMulNativeTimeResult checked_scalar_mul_native_time_result */ 14:
                    message.res = {
                        oneofKind: "checkedScalarMulNativeTimeResult",
                        checkedScalarMulNativeTimeResult: exports.CheckedScalarMulNativeTimeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkedScalarMulNativeTimeResult)
                    };
                    break;
                case /* massa.abi.v1.CheckedSubNativeTimeResult checked_sub_native_time_result */ 15:
                    message.res = {
                        oneofKind: "checkedSubNativeTimeResult",
                        checkedSubNativeTimeResult: exports.CheckedSubNativeTimeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.checkedSubNativeTimeResult)
                    };
                    break;
                case /* massa.abi.v1.CompareAddressResult compare_address_result */ 16:
                    message.res = {
                        oneofKind: "compareAddressResult",
                        compareAddressResult: exports.CompareAddressResult.internalBinaryRead(reader, reader.uint32(), options, message.res.compareAddressResult)
                    };
                    break;
                case /* massa.abi.v1.CompareNativeAmountResult compare_native_amount_result */ 17:
                    message.res = {
                        oneofKind: "compareNativeAmountResult",
                        compareNativeAmountResult: exports.CompareNativeAmountResult.internalBinaryRead(reader, reader.uint32(), options, message.res.compareNativeAmountResult)
                    };
                    break;
                case /* massa.abi.v1.CompareNativeTimeResult compare_native_time_result */ 18:
                    message.res = {
                        oneofKind: "compareNativeTimeResult",
                        compareNativeTimeResult: exports.CompareNativeTimeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.compareNativeTimeResult)
                    };
                    break;
                case /* massa.abi.v1.ComparePubKeyResult compare_pub_key_result */ 19:
                    message.res = {
                        oneofKind: "comparePubKeyResult",
                        comparePubKeyResult: exports.ComparePubKeyResult.internalBinaryRead(reader, reader.uint32(), options, message.res.comparePubKeyResult)
                    };
                    break;
                case /* massa.abi.v1.CreateScResult create_sc_result */ 20:
                    message.res = {
                        oneofKind: "createScResult",
                        createScResult: exports.CreateScResult.internalBinaryRead(reader, reader.uint32(), options, message.res.createScResult)
                    };
                    break;
                case /* massa.abi.v1.DeleteDsEntryResult delete_ds_entry_result */ 21:
                    message.res = {
                        oneofKind: "deleteDsEntryResult",
                        deleteDsEntryResult: exports.DeleteDsEntryResult.internalBinaryRead(reader, reader.uint32(), options, message.res.deleteDsEntryResult)
                    };
                    break;
                case /* massa.abi.v1.DivRemNativeAmountResult div_rem_native_amount_result */ 22:
                    message.res = {
                        oneofKind: "divRemNativeAmountResult",
                        divRemNativeAmountResult: exports.DivRemNativeAmountResult.internalBinaryRead(reader, reader.uint32(), options, message.res.divRemNativeAmountResult)
                    };
                    break;
                case /* massa.abi.v1.DsEntryExistsResult ds_entry_exists_result */ 23:
                    message.res = {
                        oneofKind: "dsEntryExistsResult",
                        dsEntryExistsResult: exports.DsEntryExistsResult.internalBinaryRead(reader, reader.uint32(), options, message.res.dsEntryExistsResult)
                    };
                    break;
                case /* massa.abi.v1.FunctionExistsResult function_exists_result */ 24:
                    message.res = {
                        oneofKind: "functionExistsResult",
                        functionExistsResult: exports.FunctionExistsResult.internalBinaryRead(reader, reader.uint32(), options, message.res.functionExistsResult)
                    };
                    break;
                case /* massa.abi.v1.GenerateEventResult generate_event_result */ 25:
                    message.res = {
                        oneofKind: "generateEventResult",
                        generateEventResult: exports.GenerateEventResult.internalBinaryRead(reader, reader.uint32(), options, message.res.generateEventResult)
                    };
                    break;
                case /* massa.abi.v1.GetAddressCategoryResult get_address_category_result */ 26:
                    message.res = {
                        oneofKind: "getAddressCategoryResult",
                        getAddressCategoryResult: exports.GetAddressCategoryResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getAddressCategoryResult)
                    };
                    break;
                case /* massa.abi.v1.GetAddressVersionResult get_address_version_result */ 27:
                    message.res = {
                        oneofKind: "getAddressVersionResult",
                        getAddressVersionResult: exports.GetAddressVersionResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getAddressVersionResult)
                    };
                    break;
                case /* massa.abi.v1.GetBalanceResult get_balance_result */ 28:
                    message.res = {
                        oneofKind: "getBalanceResult",
                        getBalanceResult: exports.GetBalanceResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getBalanceResult)
                    };
                    break;
                case /* massa.abi.v1.GetBytecodeResult get_bytecode_result */ 29:
                    message.res = {
                        oneofKind: "getBytecodeResult",
                        getBytecodeResult: exports.GetBytecodeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getBytecodeResult)
                    };
                    break;
                case /* massa.abi.v1.GetCallCoinsResult get_call_coins_result */ 30:
                    message.res = {
                        oneofKind: "getCallCoinsResult",
                        getCallCoinsResult: exports.GetCallCoinsResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getCallCoinsResult)
                    };
                    break;
                case /* massa.abi.v1.GetCallStackResult get_call_stack_result */ 31:
                    message.res = {
                        oneofKind: "getCallStackResult",
                        getCallStackResult: exports.GetCallStackResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getCallStackResult)
                    };
                    break;
                case /* massa.abi.v1.GetCurrentSlotResult get_current_slot_result */ 32:
                    message.res = {
                        oneofKind: "getCurrentSlotResult",
                        getCurrentSlotResult: exports.GetCurrentSlotResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getCurrentSlotResult)
                    };
                    break;
                case /* massa.abi.v1.GetDsKeysResult get_ds_keys_result */ 33:
                    message.res = {
                        oneofKind: "getDsKeysResult",
                        getDsKeysResult: exports.GetDsKeysResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getDsKeysResult)
                    };
                    break;
                case /* massa.abi.v1.GetDsValueResult get_ds_value_result */ 34:
                    message.res = {
                        oneofKind: "getDsValueResult",
                        getDsValueResult: exports.GetDsValueResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getDsValueResult)
                    };
                    break;
                case /* massa.abi.v1.GetNativeTimeResult get_native_time_result */ 35:
                    message.res = {
                        oneofKind: "getNativeTimeResult",
                        getNativeTimeResult: exports.GetNativeTimeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getNativeTimeResult)
                    };
                    break;
                case /* massa.abi.v1.GetOpDataResult get_op_data_result */ 36:
                    message.res = {
                        oneofKind: "getOpDataResult",
                        getOpDataResult: exports.GetOpDataResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getOpDataResult)
                    };
                    break;
                case /* massa.abi.v1.GetOpKeysResult get_op_keys_result */ 37:
                    message.res = {
                        oneofKind: "getOpKeysResult",
                        getOpKeysResult: exports.GetOpKeysResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getOpKeysResult)
                    };
                    break;
                case /* massa.abi.v1.GetOriginOperationIdResult get_origin_operation_id_result */ 38:
                    message.res = {
                        oneofKind: "getOriginOperationIdResult",
                        getOriginOperationIdResult: exports.GetOriginOperationIdResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getOriginOperationIdResult)
                    };
                    break;
                case /* massa.abi.v1.GetOwnedAddressesResult get_owned_addresses_result */ 39:
                    message.res = {
                        oneofKind: "getOwnedAddressesResult",
                        getOwnedAddressesResult: exports.GetOwnedAddressesResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getOwnedAddressesResult)
                    };
                    break;
                case /* massa.abi.v1.GetPubKeyVersionResult get_pub_key_version_result */ 40:
                    message.res = {
                        oneofKind: "getPubKeyVersionResult",
                        getPubKeyVersionResult: exports.GetPubKeyVersionResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getPubKeyVersionResult)
                    };
                    break;
                case /* massa.abi.v1.GetRemainingGasResult get_remaining_gas_result */ 41:
                    message.res = {
                        oneofKind: "getRemainingGasResult",
                        getRemainingGasResult: exports.GetRemainingGasResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getRemainingGasResult)
                    };
                    break;
                case /* massa.abi.v1.GetSignatureVersionResult get_signature_version_result */ 42:
                    message.res = {
                        oneofKind: "getSignatureVersionResult",
                        getSignatureVersionResult: exports.GetSignatureVersionResult.internalBinaryRead(reader, reader.uint32(), options, message.res.getSignatureVersionResult)
                    };
                    break;
                case /* massa.abi.v1.HashBlake3Result hash_blake3_result */ 43:
                    message.res = {
                        oneofKind: "hashBlake3Result",
                        hashBlake3Result: exports.HashBlake3Result.internalBinaryRead(reader, reader.uint32(), options, message.res.hashBlake3Result)
                    };
                    break;
                case /* massa.abi.v1.HashSha256Result hash_sha256_result */ 44:
                    message.res = {
                        oneofKind: "hashSha256Result",
                        hashSha256Result: exports.HashSha256Result.internalBinaryRead(reader, reader.uint32(), options, message.res.hashSha256Result)
                    };
                    break;
                case /* massa.abi.v1.OpEntryExistsResult op_entry_exists_result */ 45:
                    message.res = {
                        oneofKind: "opEntryExistsResult",
                        opEntryExistsResult: exports.OpEntryExistsResult.internalBinaryRead(reader, reader.uint32(), options, message.res.opEntryExistsResult)
                    };
                    break;
                case /* massa.abi.v1.Keccak256Result keccak256_result */ 46:
                    message.res = {
                        oneofKind: "keccak256Result",
                        keccak256Result: exports.Keccak256Result.internalBinaryRead(reader, reader.uint32(), options, message.res.keccak256Result)
                    };
                    break;
                case /* massa.abi.v1.LocalExecutionResponse local_execution_response */ 47:
                    message.res = {
                        oneofKind: "localExecutionResponse",
                        localExecutionResponse: exports.LocalExecutionResponse.internalBinaryRead(reader, reader.uint32(), options, message.res.localExecutionResponse)
                    };
                    break;
                case /* massa.abi.v1.NativeAmountFromStringResult native_amount_from_string_result */ 48:
                    message.res = {
                        oneofKind: "nativeAmountFromStringResult",
                        nativeAmountFromStringResult: exports.NativeAmountFromStringResult.internalBinaryRead(reader, reader.uint32(), options, message.res.nativeAmountFromStringResult)
                    };
                    break;
                case /* massa.abi.v1.NativeAmountToStringResult native_amount_to_string_result */ 49:
                    message.res = {
                        oneofKind: "nativeAmountToStringResult",
                        nativeAmountToStringResult: exports.NativeAmountToStringResult.internalBinaryRead(reader, reader.uint32(), options, message.res.nativeAmountToStringResult)
                    };
                    break;
                case /* massa.abi.v1.ScalarDivRemNativeAmountResult scalar_div_rem_native_amount_result */ 50:
                    message.res = {
                        oneofKind: "scalarDivRemNativeAmountResult",
                        scalarDivRemNativeAmountResult: exports.ScalarDivRemNativeAmountResult.internalBinaryRead(reader, reader.uint32(), options, message.res.scalarDivRemNativeAmountResult)
                    };
                    break;
                case /* massa.abi.v1.ScalarMulNativeAmountResult scalar_mul_native_amount_result */ 51:
                    message.res = {
                        oneofKind: "scalarMulNativeAmountResult",
                        scalarMulNativeAmountResult: exports.ScalarMulNativeAmountResult.internalBinaryRead(reader, reader.uint32(), options, message.res.scalarMulNativeAmountResult)
                    };
                    break;
                case /* massa.abi.v1.SendAsyncMessageResult send_async_message_result */ 52:
                    message.res = {
                        oneofKind: "sendAsyncMessageResult",
                        sendAsyncMessageResult: exports.SendAsyncMessageResult.internalBinaryRead(reader, reader.uint32(), options, message.res.sendAsyncMessageResult)
                    };
                    break;
                case /* massa.abi.v1.SetBytecodeResult set_bytecode_result */ 53:
                    message.res = {
                        oneofKind: "setBytecodeResult",
                        setBytecodeResult: exports.SetBytecodeResult.internalBinaryRead(reader, reader.uint32(), options, message.res.setBytecodeResult)
                    };
                    break;
                case /* massa.abi.v1.SetDsValueResult set_ds_value_result */ 54:
                    message.res = {
                        oneofKind: "setDsValueResult",
                        setDsValueResult: exports.SetDsValueResult.internalBinaryRead(reader, reader.uint32(), options, message.res.setDsValueResult)
                    };
                    break;
                case /* massa.abi.v1.SubNativeAmountResult sub_native_amount_result */ 55:
                    message.res = {
                        oneofKind: "subNativeAmountResult",
                        subNativeAmountResult: exports.SubNativeAmountResult.internalBinaryRead(reader, reader.uint32(), options, message.res.subNativeAmountResult)
                    };
                    break;
                case /* massa.abi.v1.TransferCoinsResult transfer_coins_result */ 56:
                    message.res = {
                        oneofKind: "transferCoinsResult",
                        transferCoinsResult: exports.TransferCoinsResult.internalBinaryRead(reader, reader.uint32(), options, message.res.transferCoinsResult)
                    };
                    break;
                case /* massa.abi.v1.UnsafeRandomResult unsafe_random_result */ 57:
                    message.res = {
                        oneofKind: "unsafeRandomResult",
                        unsafeRandomResult: exports.UnsafeRandomResult.internalBinaryRead(reader, reader.uint32(), options, message.res.unsafeRandomResult)
                    };
                    break;
                case /* massa.abi.v1.EvmVerifySigResult evm_verify_sig_result */ 58:
                    message.res = {
                        oneofKind: "evmVerifySigResult",
                        evmVerifySigResult: exports.EvmVerifySigResult.internalBinaryRead(reader, reader.uint32(), options, message.res.evmVerifySigResult)
                    };
                    break;
                case /* massa.abi.v1.VerifySigResult verify_sig_result */ 59:
                    message.res = {
                        oneofKind: "verifySigResult",
                        verifySigResult: exports.VerifySigResult.internalBinaryRead(reader, reader.uint32(), options, message.res.verifySigResult)
                    };
                    break;
                case /* massa.abi.v1.EvmGetAddressFromPubkeyResult evm_get_address_from_pubkey_result */ 60:
                    message.res = {
                        oneofKind: "evmGetAddressFromPubkeyResult",
                        evmGetAddressFromPubkeyResult: exports.EvmGetAddressFromPubkeyResult.internalBinaryRead(reader, reader.uint32(), options, message.res.evmGetAddressFromPubkeyResult)
                    };
                    break;
                case /* massa.abi.v1.EvmGetPubkeyFromSignatureResult evm_get_pubkey_from_signature_result */ 61:
                    message.res = {
                        oneofKind: "evmGetPubkeyFromSignatureResult",
                        evmGetPubkeyFromSignatureResult: exports.EvmGetPubkeyFromSignatureResult.internalBinaryRead(reader, reader.uint32(), options, message.res.evmGetPubkeyFromSignatureResult)
                    };
                    break;
                case /* massa.abi.v1.IsAddressEoaResult is_address_eoa_result */ 62:
                    message.res = {
                        oneofKind: "isAddressEoaResult",
                        isAddressEoaResult: exports.IsAddressEoaResult.internalBinaryRead(reader, reader.uint32(), options, message.res.isAddressEoaResult)
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
        /* massa.abi.v1.AddNativeAmountResult add_native_amount_result = 1; */
        if (message.res.oneofKind === "addNativeAmountResult")
            exports.AddNativeAmountResult.internalBinaryWrite(message.res.addNativeAmountResult, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.AddressFromPubKeyResult address_from_pub_key_result = 2; */
        if (message.res.oneofKind === "addressFromPubKeyResult")
            exports.AddressFromPubKeyResult.internalBinaryWrite(message.res.addressFromPubKeyResult, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.AppendDsValueResult append_ds_value_result = 3; */
        if (message.res.oneofKind === "appendDsValueResult")
            exports.AppendDsValueResult.internalBinaryWrite(message.res.appendDsValueResult, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.Base58CheckToBytesResult base58_check_to_bytes_result = 4; */
        if (message.res.oneofKind === "base58CheckToBytesResult")
            exports.Base58CheckToBytesResult.internalBinaryWrite(message.res.base58CheckToBytesResult, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.BytesToBase58CheckResult bytes_to_base58_check_result = 5; */
        if (message.res.oneofKind === "bytesToBase58CheckResult")
            exports.BytesToBase58CheckResult.internalBinaryWrite(message.res.bytesToBase58CheckResult, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CallerHasWriteAccessResult caller_has_write_access_result = 6; */
        if (message.res.oneofKind === "callerHasWriteAccessResult")
            exports.CallerHasWriteAccessResult.internalBinaryWrite(message.res.callerHasWriteAccessResult, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckAddressResult check_address_result = 7; */
        if (message.res.oneofKind === "checkAddressResult")
            exports.CheckAddressResult.internalBinaryWrite(message.res.checkAddressResult, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckNativeAmountResult check_native_amount_result = 8; */
        if (message.res.oneofKind === "checkNativeAmountResult")
            exports.CheckNativeAmountResult.internalBinaryWrite(message.res.checkNativeAmountResult, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckPubKeyResult check_pub_key_result = 9; */
        if (message.res.oneofKind === "checkPubKeyResult")
            exports.CheckPubKeyResult.internalBinaryWrite(message.res.checkPubKeyResult, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckSigResult check_sig_result = 10; */
        if (message.res.oneofKind === "checkSigResult")
            exports.CheckSigResult.internalBinaryWrite(message.res.checkSigResult, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckedAddNativeTimeResult checked_add_native_time_result = 11; */
        if (message.res.oneofKind === "checkedAddNativeTimeResult")
            exports.CheckedAddNativeTimeResult.internalBinaryWrite(message.res.checkedAddNativeTimeResult, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckedDivRemNativeTimeResult checked_div_rem_native_time_result = 12; */
        if (message.res.oneofKind === "checkedDivRemNativeTimeResult")
            exports.CheckedDivRemNativeTimeResult.internalBinaryWrite(message.res.checkedDivRemNativeTimeResult, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckedScalarDivRemNativeTimeResult checked_scalar_div_rem_native_time_result = 13; */
        if (message.res.oneofKind === "checkedScalarDivRemNativeTimeResult")
            exports.CheckedScalarDivRemNativeTimeResult.internalBinaryWrite(message.res.checkedScalarDivRemNativeTimeResult, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckedScalarMulNativeTimeResult checked_scalar_mul_native_time_result = 14; */
        if (message.res.oneofKind === "checkedScalarMulNativeTimeResult")
            exports.CheckedScalarMulNativeTimeResult.internalBinaryWrite(message.res.checkedScalarMulNativeTimeResult, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CheckedSubNativeTimeResult checked_sub_native_time_result = 15; */
        if (message.res.oneofKind === "checkedSubNativeTimeResult")
            exports.CheckedSubNativeTimeResult.internalBinaryWrite(message.res.checkedSubNativeTimeResult, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CompareAddressResult compare_address_result = 16; */
        if (message.res.oneofKind === "compareAddressResult")
            exports.CompareAddressResult.internalBinaryWrite(message.res.compareAddressResult, writer.tag(16, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CompareNativeAmountResult compare_native_amount_result = 17; */
        if (message.res.oneofKind === "compareNativeAmountResult")
            exports.CompareNativeAmountResult.internalBinaryWrite(message.res.compareNativeAmountResult, writer.tag(17, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CompareNativeTimeResult compare_native_time_result = 18; */
        if (message.res.oneofKind === "compareNativeTimeResult")
            exports.CompareNativeTimeResult.internalBinaryWrite(message.res.compareNativeTimeResult, writer.tag(18, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.ComparePubKeyResult compare_pub_key_result = 19; */
        if (message.res.oneofKind === "comparePubKeyResult")
            exports.ComparePubKeyResult.internalBinaryWrite(message.res.comparePubKeyResult, writer.tag(19, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.CreateScResult create_sc_result = 20; */
        if (message.res.oneofKind === "createScResult")
            exports.CreateScResult.internalBinaryWrite(message.res.createScResult, writer.tag(20, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.DeleteDsEntryResult delete_ds_entry_result = 21; */
        if (message.res.oneofKind === "deleteDsEntryResult")
            exports.DeleteDsEntryResult.internalBinaryWrite(message.res.deleteDsEntryResult, writer.tag(21, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.DivRemNativeAmountResult div_rem_native_amount_result = 22; */
        if (message.res.oneofKind === "divRemNativeAmountResult")
            exports.DivRemNativeAmountResult.internalBinaryWrite(message.res.divRemNativeAmountResult, writer.tag(22, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.DsEntryExistsResult ds_entry_exists_result = 23; */
        if (message.res.oneofKind === "dsEntryExistsResult")
            exports.DsEntryExistsResult.internalBinaryWrite(message.res.dsEntryExistsResult, writer.tag(23, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.FunctionExistsResult function_exists_result = 24; */
        if (message.res.oneofKind === "functionExistsResult")
            exports.FunctionExistsResult.internalBinaryWrite(message.res.functionExistsResult, writer.tag(24, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GenerateEventResult generate_event_result = 25; */
        if (message.res.oneofKind === "generateEventResult")
            exports.GenerateEventResult.internalBinaryWrite(message.res.generateEventResult, writer.tag(25, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetAddressCategoryResult get_address_category_result = 26; */
        if (message.res.oneofKind === "getAddressCategoryResult")
            exports.GetAddressCategoryResult.internalBinaryWrite(message.res.getAddressCategoryResult, writer.tag(26, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetAddressVersionResult get_address_version_result = 27; */
        if (message.res.oneofKind === "getAddressVersionResult")
            exports.GetAddressVersionResult.internalBinaryWrite(message.res.getAddressVersionResult, writer.tag(27, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetBalanceResult get_balance_result = 28; */
        if (message.res.oneofKind === "getBalanceResult")
            exports.GetBalanceResult.internalBinaryWrite(message.res.getBalanceResult, writer.tag(28, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetBytecodeResult get_bytecode_result = 29; */
        if (message.res.oneofKind === "getBytecodeResult")
            exports.GetBytecodeResult.internalBinaryWrite(message.res.getBytecodeResult, writer.tag(29, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetCallCoinsResult get_call_coins_result = 30; */
        if (message.res.oneofKind === "getCallCoinsResult")
            exports.GetCallCoinsResult.internalBinaryWrite(message.res.getCallCoinsResult, writer.tag(30, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetCallStackResult get_call_stack_result = 31; */
        if (message.res.oneofKind === "getCallStackResult")
            exports.GetCallStackResult.internalBinaryWrite(message.res.getCallStackResult, writer.tag(31, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetCurrentSlotResult get_current_slot_result = 32; */
        if (message.res.oneofKind === "getCurrentSlotResult")
            exports.GetCurrentSlotResult.internalBinaryWrite(message.res.getCurrentSlotResult, writer.tag(32, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetDsKeysResult get_ds_keys_result = 33; */
        if (message.res.oneofKind === "getDsKeysResult")
            exports.GetDsKeysResult.internalBinaryWrite(message.res.getDsKeysResult, writer.tag(33, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetDsValueResult get_ds_value_result = 34; */
        if (message.res.oneofKind === "getDsValueResult")
            exports.GetDsValueResult.internalBinaryWrite(message.res.getDsValueResult, writer.tag(34, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetNativeTimeResult get_native_time_result = 35; */
        if (message.res.oneofKind === "getNativeTimeResult")
            exports.GetNativeTimeResult.internalBinaryWrite(message.res.getNativeTimeResult, writer.tag(35, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetOpDataResult get_op_data_result = 36; */
        if (message.res.oneofKind === "getOpDataResult")
            exports.GetOpDataResult.internalBinaryWrite(message.res.getOpDataResult, writer.tag(36, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetOpKeysResult get_op_keys_result = 37; */
        if (message.res.oneofKind === "getOpKeysResult")
            exports.GetOpKeysResult.internalBinaryWrite(message.res.getOpKeysResult, writer.tag(37, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetOriginOperationIdResult get_origin_operation_id_result = 38; */
        if (message.res.oneofKind === "getOriginOperationIdResult")
            exports.GetOriginOperationIdResult.internalBinaryWrite(message.res.getOriginOperationIdResult, writer.tag(38, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetOwnedAddressesResult get_owned_addresses_result = 39; */
        if (message.res.oneofKind === "getOwnedAddressesResult")
            exports.GetOwnedAddressesResult.internalBinaryWrite(message.res.getOwnedAddressesResult, writer.tag(39, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetPubKeyVersionResult get_pub_key_version_result = 40; */
        if (message.res.oneofKind === "getPubKeyVersionResult")
            exports.GetPubKeyVersionResult.internalBinaryWrite(message.res.getPubKeyVersionResult, writer.tag(40, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetRemainingGasResult get_remaining_gas_result = 41; */
        if (message.res.oneofKind === "getRemainingGasResult")
            exports.GetRemainingGasResult.internalBinaryWrite(message.res.getRemainingGasResult, writer.tag(41, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.GetSignatureVersionResult get_signature_version_result = 42; */
        if (message.res.oneofKind === "getSignatureVersionResult")
            exports.GetSignatureVersionResult.internalBinaryWrite(message.res.getSignatureVersionResult, writer.tag(42, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.HashBlake3Result hash_blake3_result = 43; */
        if (message.res.oneofKind === "hashBlake3Result")
            exports.HashBlake3Result.internalBinaryWrite(message.res.hashBlake3Result, writer.tag(43, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.HashSha256Result hash_sha256_result = 44; */
        if (message.res.oneofKind === "hashSha256Result")
            exports.HashSha256Result.internalBinaryWrite(message.res.hashSha256Result, writer.tag(44, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.OpEntryExistsResult op_entry_exists_result = 45; */
        if (message.res.oneofKind === "opEntryExistsResult")
            exports.OpEntryExistsResult.internalBinaryWrite(message.res.opEntryExistsResult, writer.tag(45, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.Keccak256Result keccak256_result = 46; */
        if (message.res.oneofKind === "keccak256Result")
            exports.Keccak256Result.internalBinaryWrite(message.res.keccak256Result, writer.tag(46, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.LocalExecutionResponse local_execution_response = 47; */
        if (message.res.oneofKind === "localExecutionResponse")
            exports.LocalExecutionResponse.internalBinaryWrite(message.res.localExecutionResponse, writer.tag(47, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.NativeAmountFromStringResult native_amount_from_string_result = 48; */
        if (message.res.oneofKind === "nativeAmountFromStringResult")
            exports.NativeAmountFromStringResult.internalBinaryWrite(message.res.nativeAmountFromStringResult, writer.tag(48, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.NativeAmountToStringResult native_amount_to_string_result = 49; */
        if (message.res.oneofKind === "nativeAmountToStringResult")
            exports.NativeAmountToStringResult.internalBinaryWrite(message.res.nativeAmountToStringResult, writer.tag(49, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.ScalarDivRemNativeAmountResult scalar_div_rem_native_amount_result = 50; */
        if (message.res.oneofKind === "scalarDivRemNativeAmountResult")
            exports.ScalarDivRemNativeAmountResult.internalBinaryWrite(message.res.scalarDivRemNativeAmountResult, writer.tag(50, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.ScalarMulNativeAmountResult scalar_mul_native_amount_result = 51; */
        if (message.res.oneofKind === "scalarMulNativeAmountResult")
            exports.ScalarMulNativeAmountResult.internalBinaryWrite(message.res.scalarMulNativeAmountResult, writer.tag(51, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.SendAsyncMessageResult send_async_message_result = 52; */
        if (message.res.oneofKind === "sendAsyncMessageResult")
            exports.SendAsyncMessageResult.internalBinaryWrite(message.res.sendAsyncMessageResult, writer.tag(52, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.SetBytecodeResult set_bytecode_result = 53; */
        if (message.res.oneofKind === "setBytecodeResult")
            exports.SetBytecodeResult.internalBinaryWrite(message.res.setBytecodeResult, writer.tag(53, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.SetDsValueResult set_ds_value_result = 54; */
        if (message.res.oneofKind === "setDsValueResult")
            exports.SetDsValueResult.internalBinaryWrite(message.res.setDsValueResult, writer.tag(54, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.SubNativeAmountResult sub_native_amount_result = 55; */
        if (message.res.oneofKind === "subNativeAmountResult")
            exports.SubNativeAmountResult.internalBinaryWrite(message.res.subNativeAmountResult, writer.tag(55, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.TransferCoinsResult transfer_coins_result = 56; */
        if (message.res.oneofKind === "transferCoinsResult")
            exports.TransferCoinsResult.internalBinaryWrite(message.res.transferCoinsResult, writer.tag(56, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.UnsafeRandomResult unsafe_random_result = 57; */
        if (message.res.oneofKind === "unsafeRandomResult")
            exports.UnsafeRandomResult.internalBinaryWrite(message.res.unsafeRandomResult, writer.tag(57, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.EvmVerifySigResult evm_verify_sig_result = 58; */
        if (message.res.oneofKind === "evmVerifySigResult")
            exports.EvmVerifySigResult.internalBinaryWrite(message.res.evmVerifySigResult, writer.tag(58, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.VerifySigResult verify_sig_result = 59; */
        if (message.res.oneofKind === "verifySigResult")
            exports.VerifySigResult.internalBinaryWrite(message.res.verifySigResult, writer.tag(59, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.EvmGetAddressFromPubkeyResult evm_get_address_from_pubkey_result = 60; */
        if (message.res.oneofKind === "evmGetAddressFromPubkeyResult")
            exports.EvmGetAddressFromPubkeyResult.internalBinaryWrite(message.res.evmGetAddressFromPubkeyResult, writer.tag(60, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.EvmGetPubkeyFromSignatureResult evm_get_pubkey_from_signature_result = 61; */
        if (message.res.oneofKind === "evmGetPubkeyFromSignatureResult")
            exports.EvmGetPubkeyFromSignatureResult.internalBinaryWrite(message.res.evmGetPubkeyFromSignatureResult, writer.tag(61, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.IsAddressEoaResult is_address_eoa_result = 62; */
        if (message.res.oneofKind === "isAddressEoaResult")
            exports.IsAddressEoaResult.internalBinaryWrite(message.res.isAddressEoaResult, writer.tag(62, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.RespResult
 */
exports.RespResult = new RespResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbiResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.AbiResponse", [
            { no: 1, name: "res", kind: "message", oneof: "resp", T: () => exports.RespResult },
            { no: 2, name: "error", kind: "message", oneof: "resp", T: () => exports.Error }
        ]);
    }
    create(value) {
        const message = { resp: { oneofKind: undefined } };
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
                case /* massa.abi.v1.RespResult res */ 1:
                    message.resp = {
                        oneofKind: "res",
                        res: exports.RespResult.internalBinaryRead(reader, reader.uint32(), options, message.resp.res)
                    };
                    break;
                case /* massa.abi.v1.Error error */ 2:
                    message.resp = {
                        oneofKind: "error",
                        error: exports.Error.internalBinaryRead(reader, reader.uint32(), options, message.resp.error)
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
        /* massa.abi.v1.RespResult res = 1; */
        if (message.resp.oneofKind === "res")
            exports.RespResult.internalBinaryWrite(message.resp.res, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.abi.v1.Error error = 2; */
        if (message.resp.oneofKind === "error")
            exports.Error.internalBinaryWrite(message.resp.error, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.AbiResponse
 */
exports.AbiResponse = new AbiResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NativeAmountToStringRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.NativeAmountToStringRequest", [
            { no: 1, name: "to_convert", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount to_convert */ 1:
                    message.toConvert = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.toConvert);
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
        /* massa.model.v1.NativeAmount to_convert = 1; */
        if (message.toConvert)
            amount_1.NativeAmount.internalBinaryWrite(message.toConvert, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.NativeAmountToStringRequest
 */
exports.NativeAmountToStringRequest = new NativeAmountToStringRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NativeAmountToStringResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.NativeAmountToStringResult", [
            { no: 1, name: "converted_amount", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { convertedAmount: "" };
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
                case /* string converted_amount */ 1:
                    message.convertedAmount = reader.string();
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
        /* string converted_amount = 1; */
        if (message.convertedAmount !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.convertedAmount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.NativeAmountToStringResult
 */
exports.NativeAmountToStringResult = new NativeAmountToStringResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NativeAmountFromStringRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.NativeAmountFromStringRequest", [
            { no: 1, name: "to_convert", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { toConvert: "" };
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
                case /* string to_convert */ 1:
                    message.toConvert = reader.string();
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
        /* string to_convert = 1; */
        if (message.toConvert !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.toConvert);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.NativeAmountFromStringRequest
 */
exports.NativeAmountFromStringRequest = new NativeAmountFromStringRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NativeAmountFromStringResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.NativeAmountFromStringResult", [
            { no: 1, name: "converted_amount", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount converted_amount */ 1:
                    message.convertedAmount = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.convertedAmount);
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
        /* massa.model.v1.NativeAmount converted_amount = 1; */
        if (message.convertedAmount)
            amount_1.NativeAmount.internalBinaryWrite(message.convertedAmount, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.NativeAmountFromStringResult
 */
exports.NativeAmountFromStringResult = new NativeAmountFromStringResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckAddressRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckAddressRequest", [
            { no: 1, name: "to_check", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { toCheck: "" };
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
                case /* string to_check */ 1:
                    message.toCheck = reader.string();
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
        /* string to_check = 1; */
        if (message.toCheck !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.toCheck);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckAddressRequest
 */
exports.CheckAddressRequest = new CheckAddressRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckAddressResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckAddressResult", [
            { no: 1, name: "is_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isValid: false };
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
                case /* bool is_valid */ 1:
                    message.isValid = reader.bool();
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
        /* bool is_valid = 1; */
        if (message.isValid !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isValid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckAddressResult
 */
exports.CheckAddressResult = new CheckAddressResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckPubKeyRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckPubKeyRequest", [
            { no: 1, name: "to_check", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { toCheck: "" };
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
                case /* string to_check */ 1:
                    message.toCheck = reader.string();
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
        /* string to_check = 1; */
        if (message.toCheck !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.toCheck);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckPubKeyRequest
 */
exports.CheckPubKeyRequest = new CheckPubKeyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckPubKeyResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckPubKeyResult", [
            { no: 1, name: "is_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isValid: false };
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
                case /* bool is_valid */ 1:
                    message.isValid = reader.bool();
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
        /* bool is_valid = 1; */
        if (message.isValid !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isValid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckPubKeyResult
 */
exports.CheckPubKeyResult = new CheckPubKeyResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckSigRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckSigRequest", [
            { no: 1, name: "to_check", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { toCheck: "" };
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
                case /* string to_check */ 1:
                    message.toCheck = reader.string();
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
        /* string to_check = 1; */
        if (message.toCheck !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.toCheck);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckSigRequest
 */
exports.CheckSigRequest = new CheckSigRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckSigResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckSigResult", [
            { no: 1, name: "is_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isValid: false };
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
                case /* bool is_valid */ 1:
                    message.isValid = reader.bool();
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
        /* bool is_valid = 1; */
        if (message.isValid !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isValid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckSigResult
 */
exports.CheckSigResult = new CheckSigResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckNativeAmountRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckNativeAmountRequest", [
            { no: 1, name: "to_check", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount to_check */ 1:
                    message.toCheck = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.toCheck);
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
        /* massa.model.v1.NativeAmount to_check = 1; */
        if (message.toCheck)
            amount_1.NativeAmount.internalBinaryWrite(message.toCheck, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckNativeAmountRequest
 */
exports.CheckNativeAmountRequest = new CheckNativeAmountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckNativeAmountResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckNativeAmountResult", [
            { no: 1, name: "is_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isValid: false };
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
                case /* bool is_valid */ 1:
                    message.isValid = reader.bool();
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
        /* bool is_valid = 1; */
        if (message.isValid !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isValid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckNativeAmountResult
 */
exports.CheckNativeAmountResult = new CheckNativeAmountResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddNativeAmountRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.AddNativeAmountRequest", [
            { no: 1, name: "amount1", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "amount2", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount amount1 */ 1:
                    message.amount1 = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.amount1);
                    break;
                case /* massa.model.v1.NativeAmount amount2 */ 2:
                    message.amount2 = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.amount2);
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
        /* massa.model.v1.NativeAmount amount1 = 1; */
        if (message.amount1)
            amount_1.NativeAmount.internalBinaryWrite(message.amount1, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeAmount amount2 = 2; */
        if (message.amount2)
            amount_1.NativeAmount.internalBinaryWrite(message.amount2, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.AddNativeAmountRequest
 */
exports.AddNativeAmountRequest = new AddNativeAmountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddNativeAmountResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.AddNativeAmountResult", [
            { no: 1, name: "sum", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount sum */ 1:
                    message.sum = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.sum);
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
        /* massa.model.v1.NativeAmount sum = 1; */
        if (message.sum)
            amount_1.NativeAmount.internalBinaryWrite(message.sum, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.AddNativeAmountResult
 */
exports.AddNativeAmountResult = new AddNativeAmountResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubNativeAmountRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SubNativeAmountRequest", [
            { no: 1, name: "left", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "right", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount left */ 1:
                    message.left = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.left);
                    break;
                case /* massa.model.v1.NativeAmount right */ 2:
                    message.right = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.right);
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
        /* massa.model.v1.NativeAmount left = 1; */
        if (message.left)
            amount_1.NativeAmount.internalBinaryWrite(message.left, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeAmount right = 2; */
        if (message.right)
            amount_1.NativeAmount.internalBinaryWrite(message.right, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SubNativeAmountRequest
 */
exports.SubNativeAmountRequest = new SubNativeAmountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubNativeAmountResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SubNativeAmountResult", [
            { no: 1, name: "difference", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount difference */ 1:
                    message.difference = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.difference);
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
        /* massa.model.v1.NativeAmount difference = 1; */
        if (message.difference)
            amount_1.NativeAmount.internalBinaryWrite(message.difference, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SubNativeAmountResult
 */
exports.SubNativeAmountResult = new SubNativeAmountResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScalarMulNativeAmountRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.ScalarMulNativeAmountRequest", [
            { no: 1, name: "amount", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "coefficient", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { coefficient: 0n };
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
                case /* massa.model.v1.NativeAmount amount */ 1:
                    message.amount = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.amount);
                    break;
                case /* uint64 coefficient */ 2:
                    message.coefficient = reader.uint64().toBigInt();
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
        /* massa.model.v1.NativeAmount amount = 1; */
        if (message.amount)
            amount_1.NativeAmount.internalBinaryWrite(message.amount, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 coefficient = 2; */
        if (message.coefficient !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.coefficient);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.ScalarMulNativeAmountRequest
 */
exports.ScalarMulNativeAmountRequest = new ScalarMulNativeAmountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScalarMulNativeAmountResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.ScalarMulNativeAmountResult", [
            { no: 1, name: "product", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount product */ 1:
                    message.product = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.product);
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
        /* massa.model.v1.NativeAmount product = 1; */
        if (message.product)
            amount_1.NativeAmount.internalBinaryWrite(message.product, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.ScalarMulNativeAmountResult
 */
exports.ScalarMulNativeAmountResult = new ScalarMulNativeAmountResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScalarDivRemNativeAmountRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.ScalarDivRemNativeAmountRequest", [
            { no: 1, name: "dividend", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "divisor", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { divisor: 0n };
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
                case /* massa.model.v1.NativeAmount dividend */ 1:
                    message.dividend = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.dividend);
                    break;
                case /* uint64 divisor */ 2:
                    message.divisor = reader.uint64().toBigInt();
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
        /* massa.model.v1.NativeAmount dividend = 1; */
        if (message.dividend)
            amount_1.NativeAmount.internalBinaryWrite(message.dividend, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 divisor = 2; */
        if (message.divisor !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.divisor);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.ScalarDivRemNativeAmountRequest
 */
exports.ScalarDivRemNativeAmountRequest = new ScalarDivRemNativeAmountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScalarDivRemNativeAmountResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.ScalarDivRemNativeAmountResult", [
            { no: 1, name: "quotient", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "remainder", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount quotient */ 1:
                    message.quotient = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.quotient);
                    break;
                case /* massa.model.v1.NativeAmount remainder */ 2:
                    message.remainder = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.remainder);
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
        /* massa.model.v1.NativeAmount quotient = 1; */
        if (message.quotient)
            amount_1.NativeAmount.internalBinaryWrite(message.quotient, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeAmount remainder = 2; */
        if (message.remainder)
            amount_1.NativeAmount.internalBinaryWrite(message.remainder, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.ScalarDivRemNativeAmountResult
 */
exports.ScalarDivRemNativeAmountResult = new ScalarDivRemNativeAmountResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DivRemNativeAmountRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.DivRemNativeAmountRequest", [
            { no: 1, name: "dividend", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "divisor", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount dividend */ 1:
                    message.dividend = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.dividend);
                    break;
                case /* massa.model.v1.NativeAmount divisor */ 2:
                    message.divisor = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.divisor);
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
        /* massa.model.v1.NativeAmount dividend = 1; */
        if (message.dividend)
            amount_1.NativeAmount.internalBinaryWrite(message.dividend, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeAmount divisor = 2; */
        if (message.divisor)
            amount_1.NativeAmount.internalBinaryWrite(message.divisor, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.DivRemNativeAmountRequest
 */
exports.DivRemNativeAmountRequest = new DivRemNativeAmountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DivRemNativeAmountResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.DivRemNativeAmountResult", [
            { no: 1, name: "quotient", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "remainder", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = { quotient: 0n };
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
                case /* uint64 quotient */ 1:
                    message.quotient = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.NativeAmount remainder */ 2:
                    message.remainder = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.remainder);
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
        /* uint64 quotient = 1; */
        if (message.quotient !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.quotient);
        /* massa.model.v1.NativeAmount remainder = 2; */
        if (message.remainder)
            amount_1.NativeAmount.internalBinaryWrite(message.remainder, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.DivRemNativeAmountResult
 */
exports.DivRemNativeAmountResult = new DivRemNativeAmountResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedAddNativeTimeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedAddNativeTimeRequest", [
            { no: 1, name: "left", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "right", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime left */ 1:
                    message.left = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.left);
                    break;
                case /* massa.model.v1.NativeTime right */ 2:
                    message.right = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.right);
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
        /* massa.model.v1.NativeTime left = 1; */
        if (message.left)
            time_1.NativeTime.internalBinaryWrite(message.left, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime right = 2; */
        if (message.right)
            time_1.NativeTime.internalBinaryWrite(message.right, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedAddNativeTimeRequest
 */
exports.CheckedAddNativeTimeRequest = new CheckedAddNativeTimeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedAddNativeTimeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedAddNativeTimeResult", [
            { no: 1, name: "sum", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime sum */ 1:
                    message.sum = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.sum);
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
        /* massa.model.v1.NativeTime sum = 1; */
        if (message.sum)
            time_1.NativeTime.internalBinaryWrite(message.sum, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedAddNativeTimeResult
 */
exports.CheckedAddNativeTimeResult = new CheckedAddNativeTimeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedSubNativeTimeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedSubNativeTimeRequest", [
            { no: 1, name: "left", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "right", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime left */ 1:
                    message.left = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.left);
                    break;
                case /* massa.model.v1.NativeTime right */ 2:
                    message.right = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.right);
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
        /* massa.model.v1.NativeTime left = 1; */
        if (message.left)
            time_1.NativeTime.internalBinaryWrite(message.left, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime right = 2; */
        if (message.right)
            time_1.NativeTime.internalBinaryWrite(message.right, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedSubNativeTimeRequest
 */
exports.CheckedSubNativeTimeRequest = new CheckedSubNativeTimeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedSubNativeTimeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedSubNativeTimeResult", [
            { no: 1, name: "difference", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime difference */ 1:
                    message.difference = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.difference);
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
        /* massa.model.v1.NativeTime difference = 1; */
        if (message.difference)
            time_1.NativeTime.internalBinaryWrite(message.difference, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedSubNativeTimeResult
 */
exports.CheckedSubNativeTimeResult = new CheckedSubNativeTimeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedScalarMulNativeTimeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedScalarMulNativeTimeRequest", [
            { no: 1, name: "time", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "coefficient", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { coefficient: 0n };
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
                case /* massa.model.v1.NativeTime time */ 1:
                    message.time = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.time);
                    break;
                case /* uint64 coefficient */ 2:
                    message.coefficient = reader.uint64().toBigInt();
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
        /* massa.model.v1.NativeTime time = 1; */
        if (message.time)
            time_1.NativeTime.internalBinaryWrite(message.time, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 coefficient = 2; */
        if (message.coefficient !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.coefficient);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedScalarMulNativeTimeRequest
 */
exports.CheckedScalarMulNativeTimeRequest = new CheckedScalarMulNativeTimeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedScalarMulNativeTimeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedScalarMulNativeTimeResult", [
            { no: 1, name: "product", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime product */ 1:
                    message.product = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.product);
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
        /* massa.model.v1.NativeTime product = 1; */
        if (message.product)
            time_1.NativeTime.internalBinaryWrite(message.product, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedScalarMulNativeTimeResult
 */
exports.CheckedScalarMulNativeTimeResult = new CheckedScalarMulNativeTimeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedScalarDivRemNativeTimeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedScalarDivRemNativeTimeRequest", [
            { no: 1, name: "dividend", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "divisor", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { divisor: 0n };
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
                case /* massa.model.v1.NativeTime dividend */ 1:
                    message.dividend = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.dividend);
                    break;
                case /* uint64 divisor */ 2:
                    message.divisor = reader.uint64().toBigInt();
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
        /* massa.model.v1.NativeTime dividend = 1; */
        if (message.dividend)
            time_1.NativeTime.internalBinaryWrite(message.dividend, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 divisor = 2; */
        if (message.divisor !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.divisor);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedScalarDivRemNativeTimeRequest
 */
exports.CheckedScalarDivRemNativeTimeRequest = new CheckedScalarDivRemNativeTimeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedScalarDivRemNativeTimeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedScalarDivRemNativeTimeResult", [
            { no: 1, name: "quotient", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "remainder", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime quotient */ 1:
                    message.quotient = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.quotient);
                    break;
                case /* massa.model.v1.NativeTime remainder */ 2:
                    message.remainder = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.remainder);
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
        /* massa.model.v1.NativeTime quotient = 1; */
        if (message.quotient)
            time_1.NativeTime.internalBinaryWrite(message.quotient, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime remainder = 2; */
        if (message.remainder)
            time_1.NativeTime.internalBinaryWrite(message.remainder, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedScalarDivRemNativeTimeResult
 */
exports.CheckedScalarDivRemNativeTimeResult = new CheckedScalarDivRemNativeTimeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedDivRemNativeTimeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedDivRemNativeTimeRequest", [
            { no: 1, name: "dividend", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "divisor", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime dividend */ 1:
                    message.dividend = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.dividend);
                    break;
                case /* massa.model.v1.NativeTime divisor */ 2:
                    message.divisor = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.divisor);
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
        /* massa.model.v1.NativeTime dividend = 1; */
        if (message.dividend)
            time_1.NativeTime.internalBinaryWrite(message.dividend, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime divisor = 2; */
        if (message.divisor)
            time_1.NativeTime.internalBinaryWrite(message.divisor, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedDivRemNativeTimeRequest
 */
exports.CheckedDivRemNativeTimeRequest = new CheckedDivRemNativeTimeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckedDivRemNativeTimeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CheckedDivRemNativeTimeResult", [
            { no: 1, name: "quotient", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "remainder", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = { quotient: 0n };
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
                case /* uint64 quotient */ 1:
                    message.quotient = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.NativeTime remainder */ 2:
                    message.remainder = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.remainder);
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
        /* uint64 quotient = 1; */
        if (message.quotient !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.quotient);
        /* massa.model.v1.NativeTime remainder = 2; */
        if (message.remainder)
            time_1.NativeTime.internalBinaryWrite(message.remainder, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CheckedDivRemNativeTimeResult
 */
exports.CheckedDivRemNativeTimeResult = new CheckedDivRemNativeTimeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompareNativeTimeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CompareNativeTimeRequest", [
            { no: 1, name: "left", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "right", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime left */ 1:
                    message.left = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.left);
                    break;
                case /* massa.model.v1.NativeTime right */ 2:
                    message.right = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.right);
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
        /* massa.model.v1.NativeTime left = 1; */
        if (message.left)
            time_1.NativeTime.internalBinaryWrite(message.left, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime right = 2; */
        if (message.right)
            time_1.NativeTime.internalBinaryWrite(message.right, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CompareNativeTimeRequest
 */
exports.CompareNativeTimeRequest = new CompareNativeTimeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompareNativeTimeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CompareNativeTimeResult", [
            { no: 1, name: "result", kind: "enum", T: () => ["massa.model.v1.ComparisonResult", commons_1.ComparisonResult, "COMPARISON_RESULT_"] }
        ]);
    }
    create(value) {
        const message = { result: 0 };
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
                case /* massa.model.v1.ComparisonResult result */ 1:
                    message.result = reader.int32();
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
        /* massa.model.v1.ComparisonResult result = 1; */
        if (message.result !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.result);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CompareNativeTimeResult
 */
exports.CompareNativeTimeResult = new CompareNativeTimeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompareAddressRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CompareAddressRequest", [
            { no: 1, name: "left", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "right", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { left: "", right: "" };
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
                case /* string left */ 1:
                    message.left = reader.string();
                    break;
                case /* string right */ 2:
                    message.right = reader.string();
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
        /* string left = 1; */
        if (message.left !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.left);
        /* string right = 2; */
        if (message.right !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.right);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CompareAddressRequest
 */
exports.CompareAddressRequest = new CompareAddressRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompareAddressResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CompareAddressResult", [
            { no: 1, name: "result", kind: "enum", T: () => ["massa.model.v1.ComparisonResult", commons_1.ComparisonResult, "COMPARISON_RESULT_"] }
        ]);
    }
    create(value) {
        const message = { result: 0 };
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
                case /* massa.model.v1.ComparisonResult result */ 1:
                    message.result = reader.int32();
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
        /* massa.model.v1.ComparisonResult result = 1; */
        if (message.result !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.result);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CompareAddressResult
 */
exports.CompareAddressResult = new CompareAddressResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ComparePubKeyRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.ComparePubKeyRequest", [
            { no: 1, name: "left", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "right", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { left: "", right: "" };
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
                case /* string left */ 1:
                    message.left = reader.string();
                    break;
                case /* string right */ 2:
                    message.right = reader.string();
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
        /* string left = 1; */
        if (message.left !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.left);
        /* string right = 2; */
        if (message.right !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.right);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.ComparePubKeyRequest
 */
exports.ComparePubKeyRequest = new ComparePubKeyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ComparePubKeyResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.ComparePubKeyResult", [
            { no: 1, name: "result", kind: "enum", T: () => ["massa.model.v1.ComparisonResult", commons_1.ComparisonResult, "COMPARISON_RESULT_"] }
        ]);
    }
    create(value) {
        const message = { result: 0 };
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
                case /* massa.model.v1.ComparisonResult result */ 1:
                    message.result = reader.int32();
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
        /* massa.model.v1.ComparisonResult result = 1; */
        if (message.result !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.result);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.ComparePubKeyResult
 */
exports.ComparePubKeyResult = new ComparePubKeyResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifySigRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.VerifySigRequest", [
            { no: 1, name: "sig", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "message", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "pub_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { sig: "", message: new Uint8Array(0), pubKey: "" };
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
                case /* string sig */ 1:
                    message.sig = reader.string();
                    break;
                case /* bytes message */ 2:
                    message.message = reader.bytes();
                    break;
                case /* string pub_key */ 3:
                    message.pubKey = reader.string();
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
        /* string sig = 1; */
        if (message.sig !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.sig);
        /* bytes message = 2; */
        if (message.message.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.message);
        /* string pub_key = 3; */
        if (message.pubKey !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.pubKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.VerifySigRequest
 */
exports.VerifySigRequest = new VerifySigRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifySigResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.VerifySigResult", [
            { no: 1, name: "is_verified", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isVerified: false };
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
                case /* bool is_verified */ 1:
                    message.isVerified = reader.bool();
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
        /* bool is_verified = 1; */
        if (message.isVerified !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isVerified);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.VerifySigResult
 */
exports.VerifySigResult = new VerifySigResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompareNativeAmountRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CompareNativeAmountRequest", [
            { no: 1, name: "left", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "right", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount left */ 1:
                    message.left = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.left);
                    break;
                case /* massa.model.v1.NativeAmount right */ 2:
                    message.right = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.right);
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
        /* massa.model.v1.NativeAmount left = 1; */
        if (message.left)
            amount_1.NativeAmount.internalBinaryWrite(message.left, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeAmount right = 2; */
        if (message.right)
            amount_1.NativeAmount.internalBinaryWrite(message.right, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CompareNativeAmountRequest
 */
exports.CompareNativeAmountRequest = new CompareNativeAmountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompareNativeAmountResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CompareNativeAmountResult", [
            { no: 1, name: "result", kind: "enum", T: () => ["massa.model.v1.ComparisonResult", commons_1.ComparisonResult, "COMPARISON_RESULT_"] }
        ]);
    }
    create(value) {
        const message = { result: 0 };
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
                case /* massa.model.v1.ComparisonResult result */ 1:
                    message.result = reader.int32();
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
        /* massa.model.v1.ComparisonResult result = 1; */
        if (message.result !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.result);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CompareNativeAmountResult
 */
exports.CompareNativeAmountResult = new CompareNativeAmountResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Keccak256Request$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.Keccak256Request", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { data: new Uint8Array(0) };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.Keccak256Request
 */
exports.Keccak256Request = new Keccak256Request$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Keccak256Result$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.Keccak256Result", [
            { no: 1, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { hash: new Uint8Array(0) };
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
                case /* bytes hash */ 1:
                    message.hash = reader.bytes();
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
        /* bytes hash = 1; */
        if (message.hash.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.Keccak256Result
 */
exports.Keccak256Result = new Keccak256Result$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvmVerifySigRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.EvmVerifySigRequest", [
            { no: 1, name: "sig", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "message", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "pub_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { sig: new Uint8Array(0), message: new Uint8Array(0), pubKey: new Uint8Array(0) };
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
                case /* bytes sig */ 1:
                    message.sig = reader.bytes();
                    break;
                case /* bytes message */ 2:
                    message.message = reader.bytes();
                    break;
                case /* bytes pub_key */ 3:
                    message.pubKey = reader.bytes();
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
        /* bytes sig = 1; */
        if (message.sig.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.sig);
        /* bytes message = 2; */
        if (message.message.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.message);
        /* bytes pub_key = 3; */
        if (message.pubKey.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.pubKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.EvmVerifySigRequest
 */
exports.EvmVerifySigRequest = new EvmVerifySigRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvmVerifySigResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.EvmVerifySigResult", [
            { no: 1, name: "is_verified", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isVerified: false };
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
                case /* bool is_verified */ 1:
                    message.isVerified = reader.bool();
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
        /* bool is_verified = 1; */
        if (message.isVerified !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isVerified);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.EvmVerifySigResult
 */
exports.EvmVerifySigResult = new EvmVerifySigResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvmGetAddressFromPubkeyRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.EvmGetAddressFromPubkeyRequest", [
            { no: 1, name: "pub_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { pubKey: new Uint8Array(0) };
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
                case /* bytes pub_key */ 1:
                    message.pubKey = reader.bytes();
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
        /* bytes pub_key = 1; */
        if (message.pubKey.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.pubKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.EvmGetAddressFromPubkeyRequest
 */
exports.EvmGetAddressFromPubkeyRequest = new EvmGetAddressFromPubkeyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvmGetAddressFromPubkeyResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.EvmGetAddressFromPubkeyResult", [
            { no: 1, name: "address", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { address: new Uint8Array(0) };
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
                case /* bytes address */ 1:
                    message.address = reader.bytes();
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
        /* bytes address = 1; */
        if (message.address.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.address);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.EvmGetAddressFromPubkeyResult
 */
exports.EvmGetAddressFromPubkeyResult = new EvmGetAddressFromPubkeyResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvmGetPubkeyFromSignatureRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.EvmGetPubkeyFromSignatureRequest", [
            { no: 1, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "sig", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { hash: new Uint8Array(0), sig: new Uint8Array(0) };
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
                case /* bytes hash */ 1:
                    message.hash = reader.bytes();
                    break;
                case /* bytes sig */ 2:
                    message.sig = reader.bytes();
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
        /* bytes hash = 1; */
        if (message.hash.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.hash);
        /* bytes sig = 2; */
        if (message.sig.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.sig);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.EvmGetPubkeyFromSignatureRequest
 */
exports.EvmGetPubkeyFromSignatureRequest = new EvmGetPubkeyFromSignatureRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvmGetPubkeyFromSignatureResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.EvmGetPubkeyFromSignatureResult", [
            { no: 1, name: "pub_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { pubKey: new Uint8Array(0) };
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
                case /* bytes pub_key */ 1:
                    message.pubKey = reader.bytes();
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
        /* bytes pub_key = 1; */
        if (message.pubKey.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.pubKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.EvmGetPubkeyFromSignatureResult
 */
exports.EvmGetPubkeyFromSignatureResult = new EvmGetPubkeyFromSignatureResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IsAddressEoaRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.IsAddressEoaRequest", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { address: "" };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.IsAddressEoaRequest
 */
exports.IsAddressEoaRequest = new IsAddressEoaRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IsAddressEoaResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.IsAddressEoaResult", [
            { no: 1, name: "is_eoa", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isEoa: false };
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
                case /* bool is_eoa */ 1:
                    message.isEoa = reader.bool();
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
        /* bool is_eoa = 1; */
        if (message.isEoa !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isEoa);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.IsAddressEoaResult
 */
exports.IsAddressEoaResult = new IsAddressEoaResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashBlake3Request$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.HashBlake3Request", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { data: new Uint8Array(0) };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.HashBlake3Request
 */
exports.HashBlake3Request = new HashBlake3Request$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashBlake3Result$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.HashBlake3Result", [
            { no: 1, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { hash: new Uint8Array(0) };
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
                case /* bytes hash */ 1:
                    message.hash = reader.bytes();
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
        /* bytes hash = 1; */
        if (message.hash.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.HashBlake3Result
 */
exports.HashBlake3Result = new HashBlake3Result$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDsKeysRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetDsKeysRequest", [
            { no: 1, name: "prefix", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { prefix: new Uint8Array(0) };
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
                case /* bytes prefix */ 1:
                    message.prefix = reader.bytes();
                    break;
                case /* optional google.protobuf.StringValue address */ 2:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* bytes prefix = 1; */
        if (message.prefix.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.prefix);
        /* optional google.protobuf.StringValue address = 2; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetDsKeysRequest
 */
exports.GetDsKeysRequest = new GetDsKeysRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDsKeysResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetDsKeysResult", [
            { no: 1, name: "keys", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { keys: [] };
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
                case /* repeated bytes keys */ 1:
                    message.keys.push(reader.bytes());
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
        /* repeated bytes keys = 1; */
        for (let i = 0; i < message.keys.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.keys[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetDsKeysResult
 */
exports.GetDsKeysResult = new GetDsKeysResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetDsValueRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SetDsValueRequest", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0), value: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* bytes value */ 2:
                    message.value = reader.bytes();
                    break;
                case /* optional google.protobuf.StringValue address */ 3:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        /* bytes value = 2; */
        if (message.value.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.value);
        /* optional google.protobuf.StringValue address = 3; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SetDsValueRequest
 */
exports.SetDsValueRequest = new SetDsValueRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetDsValueResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SetDsValueResult", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SetDsValueResult
 */
exports.SetDsValueResult = new SetDsValueResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AppendDsValueRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.AppendDsValueRequest", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0), value: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* bytes value */ 2:
                    message.value = reader.bytes();
                    break;
                case /* optional google.protobuf.StringValue address */ 3:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        /* bytes value = 2; */
        if (message.value.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.value);
        /* optional google.protobuf.StringValue address = 3; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.AppendDsValueRequest
 */
exports.AppendDsValueRequest = new AppendDsValueRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AppendDsValueResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.AppendDsValueResult", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.AppendDsValueResult
 */
exports.AppendDsValueResult = new AppendDsValueResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDsValueRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetDsValueRequest", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* optional google.protobuf.StringValue address */ 2:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        /* optional google.protobuf.StringValue address = 2; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetDsValueRequest
 */
exports.GetDsValueRequest = new GetDsValueRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDsValueResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetDsValueResult", [
            { no: 1, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { value: new Uint8Array(0) };
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
                case /* bytes value */ 1:
                    message.value = reader.bytes();
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
        /* bytes value = 1; */
        if (message.value.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetDsValueResult
 */
exports.GetDsValueResult = new GetDsValueResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteDsEntryRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.DeleteDsEntryRequest", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* optional google.protobuf.StringValue address */ 2:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        /* optional google.protobuf.StringValue address = 2; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.DeleteDsEntryRequest
 */
exports.DeleteDsEntryRequest = new DeleteDsEntryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteDsEntryResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.DeleteDsEntryResult", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.DeleteDsEntryResult
 */
exports.DeleteDsEntryResult = new DeleteDsEntryResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DsEntryExistsRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.DsEntryExistsRequest", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* optional google.protobuf.StringValue address */ 2:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        /* optional google.protobuf.StringValue address = 2; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.DsEntryExistsRequest
 */
exports.DsEntryExistsRequest = new DsEntryExistsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DsEntryExistsResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.DsEntryExistsResult", [
            { no: 1, name: "has_data", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { hasData: false };
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
                case /* bool has_data */ 1:
                    message.hasData = reader.bool();
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
        /* bool has_data = 1; */
        if (message.hasData !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.hasData);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.DsEntryExistsResult
 */
exports.DsEntryExistsResult = new DsEntryExistsResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOwnedAddressesRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOwnedAddressesRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOwnedAddressesRequest
 */
exports.GetOwnedAddressesRequest = new GetOwnedAddressesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOwnedAddressesResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOwnedAddressesResult", [
            { no: 1, name: "addresses", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { addresses: [] };
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
                case /* repeated string addresses */ 1:
                    message.addresses.push(reader.string());
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
        /* repeated string addresses = 1; */
        for (let i = 0; i < message.addresses.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.addresses[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOwnedAddressesResult
 */
exports.GetOwnedAddressesResult = new GetOwnedAddressesResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCallStackRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetCallStackRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetCallStackRequest
 */
exports.GetCallStackRequest = new GetCallStackRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCallStackResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetCallStackResult", [
            { no: 1, name: "calls", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { calls: [] };
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
                case /* repeated string calls */ 1:
                    message.calls.push(reader.string());
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
        /* repeated string calls = 1; */
        for (let i = 0; i < message.calls.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.calls[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetCallStackResult
 */
exports.GetCallStackResult = new GetCallStackResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddressFromPubKeyRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.AddressFromPubKeyRequest", [
            { no: 1, name: "pub_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { pubKey: "" };
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
                case /* string pub_key */ 1:
                    message.pubKey = reader.string();
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
        /* string pub_key = 1; */
        if (message.pubKey !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.pubKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.AddressFromPubKeyRequest
 */
exports.AddressFromPubKeyRequest = new AddressFromPubKeyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddressFromPubKeyResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.AddressFromPubKeyResult", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { address: "" };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.AddressFromPubKeyResult
 */
exports.AddressFromPubKeyResult = new AddressFromPubKeyResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnsafeRandomRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.UnsafeRandomRequest", [
            { no: 2, name: "num_bytes", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { numBytes: 0 };
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
                case /* uint32 num_bytes */ 2:
                    message.numBytes = reader.uint32();
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
        /* uint32 num_bytes = 2; */
        if (message.numBytes !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.numBytes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.UnsafeRandomRequest
 */
exports.UnsafeRandomRequest = new UnsafeRandomRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnsafeRandomResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.UnsafeRandomResult", [
            { no: 1, name: "random_bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { randomBytes: new Uint8Array(0) };
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
                case /* bytes random_bytes */ 1:
                    message.randomBytes = reader.bytes();
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
        /* bytes random_bytes = 1; */
        if (message.randomBytes.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.randomBytes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.UnsafeRandomResult
 */
exports.UnsafeRandomResult = new UnsafeRandomResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendAsyncMessageFilter$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SendAsyncMessageFilter", [
            { no: 1, name: "target_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "target_key", kind: "message", T: () => wrappers_1.BytesValue }
        ]);
    }
    create(value) {
        const message = { targetAddress: "" };
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
                case /* google.protobuf.BytesValue target_key */ 2:
                    message.targetKey = wrappers_1.BytesValue.internalBinaryRead(reader, reader.uint32(), options, message.targetKey);
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
        /* google.protobuf.BytesValue target_key = 2; */
        if (message.targetKey)
            wrappers_1.BytesValue.internalBinaryWrite(message.targetKey, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SendAsyncMessageFilter
 */
exports.SendAsyncMessageFilter = new SendAsyncMessageFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendAsyncMessageRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SendAsyncMessageRequest", [
            { no: 1, name: "target_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "target_handler", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "validity_start", kind: "message", T: () => slot_1.Slot },
            { no: 4, name: "validity_end", kind: "message", T: () => slot_1.Slot },
            { no: 5, name: "execution_gas", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "raw_fee", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "raw_coins", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 9, name: "filter", kind: "message", T: () => exports.SendAsyncMessageFilter }
        ]);
    }
    create(value) {
        const message = { targetAddress: "", targetHandler: "", executionGas: 0n, rawFee: 0n, rawCoins: 0n, data: new Uint8Array(0) };
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
                case /* string target_handler */ 2:
                    message.targetHandler = reader.string();
                    break;
                case /* massa.model.v1.Slot validity_start */ 3:
                    message.validityStart = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.validityStart);
                    break;
                case /* massa.model.v1.Slot validity_end */ 4:
                    message.validityEnd = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.validityEnd);
                    break;
                case /* uint64 execution_gas */ 5:
                    message.executionGas = reader.uint64().toBigInt();
                    break;
                case /* uint64 raw_fee */ 6:
                    message.rawFee = reader.uint64().toBigInt();
                    break;
                case /* uint64 raw_coins */ 7:
                    message.rawCoins = reader.uint64().toBigInt();
                    break;
                case /* bytes data */ 8:
                    message.data = reader.bytes();
                    break;
                case /* massa.abi.v1.SendAsyncMessageFilter filter */ 9:
                    message.filter = exports.SendAsyncMessageFilter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
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
        /* string target_handler = 2; */
        if (message.targetHandler !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.targetHandler);
        /* massa.model.v1.Slot validity_start = 3; */
        if (message.validityStart)
            slot_1.Slot.internalBinaryWrite(message.validityStart, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot validity_end = 4; */
        if (message.validityEnd)
            slot_1.Slot.internalBinaryWrite(message.validityEnd, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 execution_gas = 5; */
        if (message.executionGas !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.executionGas);
        /* uint64 raw_fee = 6; */
        if (message.rawFee !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.rawFee);
        /* uint64 raw_coins = 7; */
        if (message.rawCoins !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.rawCoins);
        /* bytes data = 8; */
        if (message.data.length)
            writer.tag(8, runtime_1.WireType.LengthDelimited).bytes(message.data);
        /* massa.abi.v1.SendAsyncMessageFilter filter = 9; */
        if (message.filter)
            exports.SendAsyncMessageFilter.internalBinaryWrite(message.filter, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SendAsyncMessageRequest
 */
exports.SendAsyncMessageRequest = new SendAsyncMessageRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendAsyncMessageResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SendAsyncMessageResult", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SendAsyncMessageResult
 */
exports.SendAsyncMessageResult = new SendAsyncMessageResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOriginOperationIdRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOriginOperationIdRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOriginOperationIdRequest
 */
exports.GetOriginOperationIdRequest = new GetOriginOperationIdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOriginOperationIdResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOriginOperationIdResult", [
            { no: 1, name: "operation_id", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional google.protobuf.StringValue operation_id */ 1:
                    message.operationId = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.operationId);
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
        /* optional google.protobuf.StringValue operation_id = 1; */
        if (message.operationId)
            wrappers_2.StringValue.internalBinaryWrite(message.operationId, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOriginOperationIdResult
 */
exports.GetOriginOperationIdResult = new GetOriginOperationIdResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNativeTimeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetNativeTimeRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetNativeTimeRequest
 */
exports.GetNativeTimeRequest = new GetNativeTimeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNativeTimeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetNativeTimeResult", [
            { no: 1, name: "time", kind: "message", T: () => time_1.NativeTime }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeTime time */ 1:
                    message.time = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.time);
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
        /* massa.model.v1.NativeTime time = 1; */
        if (message.time)
            time_1.NativeTime.internalBinaryWrite(message.time, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetNativeTimeResult
 */
exports.GetNativeTimeResult = new GetNativeTimeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCurrentSlotRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetCurrentSlotRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetCurrentSlotRequest
 */
exports.GetCurrentSlotRequest = new GetCurrentSlotRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCurrentSlotResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetCurrentSlotResult", [
            { no: 1, name: "slot", kind: "message", T: () => slot_1.Slot }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.Slot slot */ 1:
                    message.slot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
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
        /* massa.model.v1.Slot slot = 1; */
        if (message.slot)
            slot_1.Slot.internalBinaryWrite(message.slot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetCurrentSlotResult
 */
exports.GetCurrentSlotResult = new GetCurrentSlotResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetBytecodeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SetBytecodeRequest", [
            { no: 1, name: "bytecode", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = { bytecode: new Uint8Array(0) };
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
                case /* bytes bytecode */ 1:
                    message.bytecode = reader.bytes();
                    break;
                case /* optional google.protobuf.StringValue address */ 2:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* bytes bytecode = 1; */
        if (message.bytecode.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.bytecode);
        /* optional google.protobuf.StringValue address = 2; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SetBytecodeRequest
 */
exports.SetBytecodeRequest = new SetBytecodeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetBytecodeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.SetBytecodeResult", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.SetBytecodeResult
 */
exports.SetBytecodeResult = new SetBytecodeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBytecodeRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetBytecodeRequest", [
            { no: 1, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional google.protobuf.StringValue address */ 1:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* optional google.protobuf.StringValue address = 1; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetBytecodeRequest
 */
exports.GetBytecodeRequest = new GetBytecodeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBytecodeResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetBytecodeResult", [
            { no: 1, name: "bytecode", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { bytecode: new Uint8Array(0) };
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
                case /* bytes bytecode */ 1:
                    message.bytecode = reader.bytes();
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
        /* bytes bytecode = 1; */
        if (message.bytecode.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.bytecode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetBytecodeResult
 */
exports.GetBytecodeResult = new GetBytecodeResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallerHasWriteAccessRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CallerHasWriteAccessRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CallerHasWriteAccessRequest
 */
exports.CallerHasWriteAccessRequest = new CallerHasWriteAccessRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallerHasWriteAccessResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.CallerHasWriteAccessResult", [
            { no: 1, name: "has_write_access", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { hasWriteAccess: false };
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
                case /* bool has_write_access */ 1:
                    message.hasWriteAccess = reader.bool();
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
        /* bool has_write_access = 1; */
        if (message.hasWriteAccess !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.hasWriteAccess);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.CallerHasWriteAccessResult
 */
exports.CallerHasWriteAccessResult = new CallerHasWriteAccessResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashSha256Request$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.HashSha256Request", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { data: new Uint8Array(0) };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.HashSha256Request
 */
exports.HashSha256Request = new HashSha256Request$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashSha256Result$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.HashSha256Result", [
            { no: 1, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { hash: new Uint8Array(0) };
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
                case /* bytes hash */ 1:
                    message.hash = reader.bytes();
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
        /* bytes hash = 1; */
        if (message.hash.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.HashSha256Result
 */
exports.HashSha256Result = new HashSha256Result$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpDataRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOpDataRequest", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOpDataRequest
 */
exports.GetOpDataRequest = new GetOpDataRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpDataResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOpDataResult", [
            { no: 1, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { value: new Uint8Array(0) };
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
                case /* bytes value */ 1:
                    message.value = reader.bytes();
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
        /* bytes value = 1; */
        if (message.value.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOpDataResult
 */
exports.GetOpDataResult = new GetOpDataResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpEntryExistsRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.OpEntryExistsRequest", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.OpEntryExistsRequest
 */
exports.OpEntryExistsRequest = new OpEntryExistsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpEntryExistsResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.OpEntryExistsResult", [
            { no: 1, name: "has_key", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { hasKey: false };
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
                case /* bool has_key */ 1:
                    message.hasKey = reader.bool();
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
        /* bool has_key = 1; */
        if (message.hasKey !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.hasKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.OpEntryExistsResult
 */
exports.OpEntryExistsResult = new OpEntryExistsResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpKeysRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOpKeysRequest", [
            { no: 1, name: "prefix", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { prefix: new Uint8Array(0) };
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
                case /* bytes prefix */ 1:
                    message.prefix = reader.bytes();
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
        /* bytes prefix = 1; */
        if (message.prefix.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.prefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOpKeysRequest
 */
exports.GetOpKeysRequest = new GetOpKeysRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpKeysResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetOpKeysResult", [
            { no: 1, name: "keys", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { keys: [] };
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
                case /* repeated bytes keys */ 1:
                    message.keys.push(reader.bytes());
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
        /* repeated bytes keys = 1; */
        for (let i = 0; i < message.keys.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.keys[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetOpKeysResult
 */
exports.GetOpKeysResult = new GetOpKeysResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRemainingGasRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetRemainingGasRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetRemainingGasRequest
 */
exports.GetRemainingGasRequest = new GetRemainingGasRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRemainingGasResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetRemainingGasResult", [
            { no: 1, name: "remaining_gas", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { remainingGas: 0n };
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
                case /* uint64 remaining_gas */ 1:
                    message.remainingGas = reader.uint64().toBigInt();
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
        /* uint64 remaining_gas = 1; */
        if (message.remainingGas !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.remainingGas);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetRemainingGasResult
 */
exports.GetRemainingGasResult = new GetRemainingGasResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBalanceRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetBalanceRequest", [
            { no: 1, name: "address", kind: "message", T: () => wrappers_2.StringValue }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional google.protobuf.StringValue address */ 1:
                    message.address = wrappers_2.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.address);
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
        /* optional google.protobuf.StringValue address = 1; */
        if (message.address)
            wrappers_2.StringValue.internalBinaryWrite(message.address, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetBalanceRequest
 */
exports.GetBalanceRequest = new GetBalanceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBalanceResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetBalanceResult", [
            { no: 1, name: "balance", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount balance */ 1:
                    message.balance = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.balance);
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
        /* massa.model.v1.NativeAmount balance = 1; */
        if (message.balance)
            amount_1.NativeAmount.internalBinaryWrite(message.balance, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetBalanceResult
 */
exports.GetBalanceResult = new GetBalanceResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCallCoinsRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetCallCoinsRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetCallCoinsRequest
 */
exports.GetCallCoinsRequest = new GetCallCoinsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCallCoinsResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetCallCoinsResult", [
            { no: 1, name: "coins", kind: "message", T: () => amount_1.NativeAmount }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.NativeAmount coins */ 1:
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
        /* massa.model.v1.NativeAmount coins = 1; */
        if (message.coins)
            amount_1.NativeAmount.internalBinaryWrite(message.coins, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetCallCoinsResult
 */
exports.GetCallCoinsResult = new GetCallCoinsResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAddressVersionRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetAddressVersionRequest", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { address: "" };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetAddressVersionRequest
 */
exports.GetAddressVersionRequest = new GetAddressVersionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAddressVersionResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetAddressVersionResult", [
            { no: 1, name: "version", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { version: 0n };
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
                case /* uint64 version */ 1:
                    message.version = reader.uint64().toBigInt();
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
        /* uint64 version = 1; */
        if (message.version !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetAddressVersionResult
 */
exports.GetAddressVersionResult = new GetAddressVersionResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAddressCategoryRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetAddressCategoryRequest", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { address: "" };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetAddressCategoryRequest
 */
exports.GetAddressCategoryRequest = new GetAddressCategoryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAddressCategoryResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetAddressCategoryResult", [
            { no: 1, name: "category", kind: "enum", T: () => ["massa.model.v1.AddressCategory", address_1.AddressCategory, "ADDRESS_CATEGORY_"] }
        ]);
    }
    create(value) {
        const message = { category: 0 };
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
                case /* massa.model.v1.AddressCategory category */ 1:
                    message.category = reader.int32();
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
        /* massa.model.v1.AddressCategory category = 1; */
        if (message.category !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.category);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetAddressCategoryResult
 */
exports.GetAddressCategoryResult = new GetAddressCategoryResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPubKeyVersionRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetPubKeyVersionRequest", [
            { no: 1, name: "pub_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { pubKey: "" };
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
                case /* string pub_key */ 1:
                    message.pubKey = reader.string();
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
        /* string pub_key = 1; */
        if (message.pubKey !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.pubKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetPubKeyVersionRequest
 */
exports.GetPubKeyVersionRequest = new GetPubKeyVersionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPubKeyVersionResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetPubKeyVersionResult", [
            { no: 1, name: "version", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { version: 0n };
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
                case /* uint64 version */ 1:
                    message.version = reader.uint64().toBigInt();
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
        /* uint64 version = 1; */
        if (message.version !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetPubKeyVersionResult
 */
exports.GetPubKeyVersionResult = new GetPubKeyVersionResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSignatureVersionRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetSignatureVersionRequest", [
            { no: 1, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { signature: "" };
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
                case /* string signature */ 1:
                    message.signature = reader.string();
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
        /* string signature = 1; */
        if (message.signature !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.signature);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetSignatureVersionRequest
 */
exports.GetSignatureVersionRequest = new GetSignatureVersionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSignatureVersionResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.GetSignatureVersionResult", [
            { no: 1, name: "version", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { version: 0n };
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
                case /* uint64 version */ 1:
                    message.version = reader.uint64().toBigInt();
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
        /* uint64 version = 1; */
        if (message.version !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.GetSignatureVersionResult
 */
exports.GetSignatureVersionResult = new GetSignatureVersionResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BytesToBase58CheckRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.BytesToBase58CheckRequest", [
            { no: 1, name: "bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { bytes: new Uint8Array(0) };
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
                case /* bytes bytes */ 1:
                    message.bytes = reader.bytes();
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
        /* bytes bytes = 1; */
        if (message.bytes.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.bytes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.BytesToBase58CheckRequest
 */
exports.BytesToBase58CheckRequest = new BytesToBase58CheckRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BytesToBase58CheckResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.BytesToBase58CheckResult", [
            { no: 1, name: "base58_check", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { base58Check: "" };
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
                case /* string base58_check */ 1:
                    message.base58Check = reader.string();
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
        /* string base58_check = 1; */
        if (message.base58Check !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.base58Check);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.BytesToBase58CheckResult
 */
exports.BytesToBase58CheckResult = new BytesToBase58CheckResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Base58CheckToBytesRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.Base58CheckToBytesRequest", [
            { no: 1, name: "base58_check", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { base58Check: "" };
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
                case /* string base58_check */ 1:
                    message.base58Check = reader.string();
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
        /* string base58_check = 1; */
        if (message.base58Check !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.base58Check);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.Base58CheckToBytesRequest
 */
exports.Base58CheckToBytesRequest = new Base58CheckToBytesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Base58CheckToBytesResult$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.abi.v1.Base58CheckToBytesResult", [
            { no: 1, name: "bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { bytes: new Uint8Array(0) };
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
                case /* bytes bytes */ 1:
                    message.bytes = reader.bytes();
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
        /* bytes bytes = 1; */
        if (message.bytes.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.bytes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.abi.v1.Base58CheckToBytesResult
 */
exports.Base58CheckToBytesResult = new Base58CheckToBytesResult$Type();
