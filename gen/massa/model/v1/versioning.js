"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MipComponentEntry = exports.MipInfo = exports.MipStatusEntry = exports.MipComponent = exports.ComponentStateId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const time_1 = require("./time");
/**
 * State machine for a Versioning component that tracks the deployment state
 *
 * @generated from protobuf enum massa.model.v1.ComponentStateId
 */
var ComponentStateId;
(function (ComponentStateId) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: COMPONENT_STATE_ID_UNSPECIFIED = 0;
     */
    ComponentStateId[ComponentStateId["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Error state
     *
     * @generated from protobuf enum value: COMPONENT_STATE_ID_ERROR = 1;
     */
    ComponentStateId[ComponentStateId["ERROR"] = 1] = "ERROR";
    /**
     * Initial state
     *
     * @generated from protobuf enum value: COMPONENT_STATE_ID_DEFINED = 2;
     */
    ComponentStateId[ComponentStateId["DEFINED"] = 2] = "DEFINED";
    /**
     * Past start, can only go to LockedIn after the threshold is above a given value
     *
     * @generated from protobuf enum value: COMPONENT_STATE_ID_STARTED = 3;
     */
    ComponentStateId[ComponentStateId["STARTED"] = 3] = "STARTED";
    /**
     * Locked but wait for some time before going to active (to let users the time to upgrade)
     *
     * @generated from protobuf enum value: COMPONENT_STATE_ID_LOCKEDIN = 4;
     */
    ComponentStateId[ComponentStateId["LOCKEDIN"] = 4] = "LOCKEDIN";
    /**
     * After LockedIn, deployment is considered successful (after activation delay)
     *
     * @generated from protobuf enum value: COMPONENT_STATE_ID_ACTIVE = 5;
     */
    ComponentStateId[ComponentStateId["ACTIVE"] = 5] = "ACTIVE";
    /**
     * Past the timeout, if LockedIn is not reach
     *
     * @generated from protobuf enum value: COMPONENT_STATE_ID_FAILED = 6;
     */
    ComponentStateId[ComponentStateId["FAILED"] = 6] = "FAILED";
})(ComponentStateId || (exports.ComponentStateId = ComponentStateId = {}));
/**
 * Versioning component enum
 *
 * @generated from protobuf enum massa.model.v1.MipComponent
 */
var MipComponent;
(function (MipComponent) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: MIP_COMPONENT_UNSPECIFIED = 0;
     */
    MipComponent[MipComponent["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Address component
     *
     * @generated from protobuf enum value: MIP_COMPONENT_ADDRESS = 1;
     */
    MipComponent[MipComponent["ADDRESS"] = 1] = "ADDRESS";
    /**
     * Keypair component
     *
     * @generated from protobuf enum value: MIP_COMPONENT_KEYPAIR = 2;
     */
    MipComponent[MipComponent["KEYPAIR"] = 2] = "KEYPAIR";
})(MipComponent || (exports.MipComponent = MipComponent = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MipStatusEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.MipStatusEntry", [
            { no: 1, name: "mip_info", kind: "message", T: () => exports.MipInfo },
            { no: 2, name: "state_id", kind: "enum", T: () => ["massa.model.v1.ComponentStateId", ComponentStateId, "COMPONENT_STATE_ID_"] }
        ]);
    }
    create(value) {
        const message = { stateId: 0 };
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
                case /* massa.model.v1.MipInfo mip_info */ 1:
                    message.mipInfo = exports.MipInfo.internalBinaryRead(reader, reader.uint32(), options, message.mipInfo);
                    break;
                case /* massa.model.v1.ComponentStateId state_id */ 2:
                    message.stateId = reader.int32();
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
        /* massa.model.v1.MipInfo mip_info = 1; */
        if (message.mipInfo)
            exports.MipInfo.internalBinaryWrite(message.mipInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.ComponentStateId state_id = 2; */
        if (message.stateId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.stateId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.MipStatusEntry
 */
exports.MipStatusEntry = new MipStatusEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MipInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.MipInfo", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "start", kind: "message", T: () => time_1.NativeTime },
            { no: 4, name: "timeout", kind: "message", T: () => time_1.NativeTime },
            { no: 5, name: "activation_delay", kind: "message", T: () => time_1.NativeTime },
            { no: 6, name: "components", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MipComponentEntry }
        ]);
    }
    create(value) {
        const message = { name: "", version: 0, components: [] };
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
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* uint32 version */ 2:
                    message.version = reader.uint32();
                    break;
                case /* massa.model.v1.NativeTime start */ 3:
                    message.start = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.start);
                    break;
                case /* massa.model.v1.NativeTime timeout */ 4:
                    message.timeout = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.timeout);
                    break;
                case /* massa.model.v1.NativeTime activation_delay */ 5:
                    message.activationDelay = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.activationDelay);
                    break;
                case /* repeated massa.model.v1.MipComponentEntry components */ 6:
                    message.components.push(exports.MipComponentEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* uint32 version = 2; */
        if (message.version !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.version);
        /* massa.model.v1.NativeTime start = 3; */
        if (message.start)
            time_1.NativeTime.internalBinaryWrite(message.start, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime timeout = 4; */
        if (message.timeout)
            time_1.NativeTime.internalBinaryWrite(message.timeout, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime activation_delay = 5; */
        if (message.activationDelay)
            time_1.NativeTime.internalBinaryWrite(message.activationDelay, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.MipComponentEntry components = 6; */
        for (let i = 0; i < message.components.length; i++)
            exports.MipComponentEntry.internalBinaryWrite(message.components[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.MipInfo
 */
exports.MipInfo = new MipInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MipComponentEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.MipComponentEntry", [
            { no: 1, name: "kind", kind: "enum", T: () => ["massa.model.v1.MipComponent", MipComponent, "MIP_COMPONENT_"] },
            { no: 2, name: "version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { kind: 0, version: 0 };
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
                case /* massa.model.v1.MipComponent kind */ 1:
                    message.kind = reader.int32();
                    break;
                case /* uint32 version */ 2:
                    message.version = reader.uint32();
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
        /* massa.model.v1.MipComponent kind = 1; */
        if (message.kind !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.kind);
        /* uint32 version = 2; */
        if (message.version !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.MipComponentEntry
 */
exports.MipComponentEntry = new MipComponentEntry$Type();
