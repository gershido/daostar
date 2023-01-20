// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class RegistrationInstance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("registrationAddress", Value.fromBytes(Bytes.empty()));
    this.set("daoAddress", Value.fromBytes(Bytes.empty()));
    this.set("network", Value.fromBigInt(BigInt.zero()));
    this.set("daoURI", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RegistrationInstance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RegistrationInstance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RegistrationInstance", id.toString(), this);
    }
  }

  static load(id: string): RegistrationInstance | null {
    return changetype<RegistrationInstance | null>(
      store.get("RegistrationInstance", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get registrationAddress(): Bytes {
    let value = this.get("registrationAddress");
    return value!.toBytes();
  }

  set registrationAddress(value: Bytes) {
    this.set("registrationAddress", Value.fromBytes(value));
  }

  get daoAddress(): Bytes {
    let value = this.get("daoAddress");
    return value!.toBytes();
  }

  set daoAddress(value: Bytes) {
    this.set("daoAddress", Value.fromBytes(value));
  }

  get network(): BigInt {
    let value = this.get("network");
    return value!.toBigInt();
  }

  set network(value: BigInt) {
    this.set("network", Value.fromBigInt(value));
  }

  get daoURI(): string {
    let value = this.get("daoURI");
    return value!.toString();
  }

  set daoURI(value: string) {
    this.set("daoURI", Value.fromString(value));
  }

  get daoName(): string | null {
    let value = this.get("daoName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set daoName(value: string | null) {
    if (!value) {
      this.unset("daoName");
    } else {
      this.set("daoName", Value.fromString(<string>value));
    }
  }

  get daoDescription(): string | null {
    let value = this.get("daoDescription");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set daoDescription(value: string | null) {
    if (!value) {
      this.unset("daoDescription");
    } else {
      this.set("daoDescription", Value.fromString(<string>value));
    }
  }

  get membersURI(): string | null {
    let value = this.get("membersURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set membersURI(value: string | null) {
    if (!value) {
      this.unset("membersURI");
    } else {
      this.set("membersURI", Value.fromString(<string>value));
    }
  }

  get proposalsURI(): string | null {
    let value = this.get("proposalsURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set proposalsURI(value: string | null) {
    if (!value) {
      this.unset("proposalsURI");
    } else {
      this.set("proposalsURI", Value.fromString(<string>value));
    }
  }

  get governanceURI(): string | null {
    let value = this.get("governanceURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set governanceURI(value: string | null) {
    if (!value) {
      this.unset("governanceURI");
    } else {
      this.set("governanceURI", Value.fromString(<string>value));
    }
  }

  get activityLogURI(): string | null {
    let value = this.get("activityLogURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set activityLogURI(value: string | null) {
    if (!value) {
      this.unset("activityLogURI");
    } else {
      this.set("activityLogURI", Value.fromString(<string>value));
    }
  }
}
