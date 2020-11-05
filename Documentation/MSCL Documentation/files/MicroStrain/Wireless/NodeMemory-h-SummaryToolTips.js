NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/NodeMemory.h",{7570:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7570\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeMemory</div></div></div><div class=\"TTSummary\">Provides easy access to the datalogging memory on a WirelessNode.</div></div>",7572:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7572\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">NodeMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeMemory object.</div></div>",7573:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7573\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~NodeMemory()</div><div class=\"TTSummary\">Destroys a NodeMemory object.</div></div>",7575:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7575\" class=\"NDPrototype NoParameterForm\">WirelessNode&amp; m_node</div><div class=\"TTSummary\">The WirelessNode to access the memory of.</div></div>",7576:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7576\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_totalBytes</div><div class=\"TTSummary\">The total number of bytes that can be downloaded.</div></div>",7577:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7577\" class=\"NDPrototype NoParameterForm\">ByteStream m_currentData</div><div class=\"TTSummary\">Contains data for the current page that has been downloaded.</div></div>",7579:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7579\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> nextByte() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Reads the next byte from the datalogging data.</div></div>",7580:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7580\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> isNextByteNewHeader() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Checks if the next byte will be the start of a new header.&nbsp; Note: upon returning from this function, the read position will not have changed.</div></div>",7581:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7581\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> readIndex() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Returns the current read index for the data.</div></div>",7582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7582\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> setAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">newAddress</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Sets the read address to the specified value.</div></div>",7583:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7583\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> bytesRemaining() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Calculates how many bytes are remaining in the Node\'s datalogging memory, based on the current byte position.</div></div>",7584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual float</span> percentComplete() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Calculates the percentage complete based on the current byte position.</div></div>",7585:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7585\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> skipBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">numBytesToSkip</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves the read pointer ahead by the number of bytes specified (calls read_uint8).</div></div>",7586:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7586\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> read_uint8()</div><div class=\"TTSummary\">Reads a 1-byte unsigned integer from the Node\'s memory.</div></div>",7587:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7587\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int16</span> read_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte signed integer from the Node\'s memory.</div></div>",7588:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7588\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> read_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte unsigned integer from the Node\'s memory.</div></div>",7589:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7589\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> read_uint24(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 3-byte unsigned integer from the Node\'s memory.</div></div>",7590:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7590\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int32</span> read_int24(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 3-byte signed integer from the Node\'s memory.</div></div>",7591:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7591\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> read_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte unsigned integer from the Node\'s memory.</div></div>",7592:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7592\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint64</span> read_uint64(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads an 8-byte unsigned integer from the Node\'s memory.</div></div>",7593:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7593\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> read_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte float from the Node\'s memory.</div></div>",7594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7594\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the Node\'s memory.</div></div>"});