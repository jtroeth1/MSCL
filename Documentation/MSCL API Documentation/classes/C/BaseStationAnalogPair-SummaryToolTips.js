NDSummary.OnToolTipsLoaded("CClass:BaseStationAnalogPair",{3083:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3083\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationAnalogPair</div></div></div><div class=\"TTSummary\">Represents an Analog Pairing on a BaseStation.</div></div>",3084:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">A (NaN) value representing that the paired node channel is not transmitting float point values.&nbsp; The outputVal_0V and outputVal_3V values should be set to this value if not being paired to a channel transmitting floats.</div></div>",3085:"<div class=\"NDToolTip TClass LC\"><div id=\"NDPrototype3085\" class=\"NDPrototype NoParameterForm\">BaseStationAnalogPair()</div><div class=\"TTSummary\">Creates a default constructed BaseStationAnalogPair object.</div></div>",3086:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3086\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> BaseStationAnalogPair Float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">nodeChannel,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">output_0V,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">output_3V</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationAnalogPair object to be paired to WirelessNode\'s channel that is transmitting floating point values.</div></div>",3087:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3087\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> BaseStationAnalogPair NonFloat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">nodeChannel</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationAnalogPair object to be paired to WirelessNode\'s channel that is NOT transmitting floating point values.</div></div>",3088:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3088\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address to be paired with that is currently set in this object.</div></div>",3089:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3089\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the WirelessNode to be paired with.</div></div>",3090:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3090\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> nodeChannel() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node\'s channel to be paired with that is currently set in this object.</div></div>",3091:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3091\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node\'s channel of the WirelessNode to be paired with.</div></div>",3092:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3092\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> expectFloatData() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether floating point data is expected in this object.</div></div>",3093:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3093\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> expectFloatData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether floating point data is expected or not.&nbsp; Note: If enabling, this will set outputVal_0V to 0 and outputVal_3V to 65535. You should update these values accordingly.&nbsp; Note: If disabling, this will set outputVal_0V and outputVal_3V to CHANNEL_NOT_FLOAT.</div></div>",3094:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3094\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> outputVal_0V() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the output value that represents 0 Volts that is currently set in this object.</div></div>",3095:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3095\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> outputVal_0V(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output value that represents 0 Volts.&nbsp; Note: Setting this to a NaN (CHANNEL_NOT_FLOAT) disables the float expectation and sets outputVal_3V to CHANNEL_NOT_FLOAT as well.&nbsp; Note: If outputVal_3V is set to CHANNEL_NOT_FLOAT when this is called with a real value, outputVal_3V will be updated to (value + 1.0).</div></div>",3096:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3096\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> outputVal_3V() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the output value that represents 3 Volts that is currently set in this object.</div></div>",3097:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3097\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> outputVal_3V(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output value that represents 3 Volts.&nbsp; Note: Setting this to a NaN (CHANNEL_NOT_FLOAT) disables the float expectation and sets outputVal_0V to CHANNEL_NOT_FLOAT as well.&nbsp; Note: If outputVal_0V is set to CHANNEL_NOT_FLOAT when this is called with a real value, outputVal_0V will be updated to (value - 1.0).</div></div>"});