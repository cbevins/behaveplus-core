All test in this folder require use of BpxDag as follows:

```
import { BpxDag } from '../../BpxDag.js'

import * as DagJest from '../../../utils/matchers.js'
const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const dag = BpxDag('bpxSpotting')
```