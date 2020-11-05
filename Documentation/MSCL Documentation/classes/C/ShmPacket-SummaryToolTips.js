NDSummary.OnToolTipsLoaded("CClass:ShmPacket",{5625:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5625\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ShmPacket</div></div></div><div class=\"TTSummary\">A WirelessDataPacket derived class representing a Structural Health Monitoring Packet</div></div>",5627:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5627\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ShmPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an ShmPacket from the passed in WirelessPacket.</div></div>",5629:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5629\" class=\"NDPrototype NoParameterForm\">size_t m_binCount</div><div class=\"TTSummary\">The number of bins in the packet.</div></div>",5631:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5631\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps()</div><div class=\"TTSummary\">Parses the passed in WirelessPacket for all the sweep information and adds a sweep to the sweeps container.</div></div>",5632:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5632\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_v1()</div><div class=\"TTSummary\">Parses the packet for version 1 of the SHM-Link packet.</div></div>",5633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5633\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_v2()</div><div class=\"TTSummary\">Parses the packet for version 2 of the SHM-Link packet.</div></div>",5634:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5634\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed Shm-Link packet.</div></div>",5635:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5635\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> buildChannelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a channel name for the SHM data.</div></div>"});