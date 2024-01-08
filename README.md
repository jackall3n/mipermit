# mipermit 🎟️

## Installation

```shell
pnpm add mipermit
```

```shell
yarn add mipermit
```

```shell
npm install mipermit
```

## Usage

```typescript
import { MiPermit } from "mipermit";

const client = MiPermit.create();

const permits = await client.getActivePermits();
```
