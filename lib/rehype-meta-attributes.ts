// https://github.com/wooorm/xdm#syntax-highlighting-with-the-meta-field

import { visit } from "unist-util-visit";

var re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

const rehypeMetaAttributes = (options = {}) => {
	return (tree: any) => {
		visit(tree, "element", onelement);
	};

	function onelement(node: any) {
		var match;

		if (node.tagName === "code" && node.data && node.data.meta) {
			re.lastIndex = 0; // Reset regex.

			while ((match = re.exec(node.data.meta))) {
				console.log(match);

				node.properties[match[1]] = match[2] || match[3] || match[4] || "";
				console.log("properties", node.properties);
			}
		}
	}
};

export default rehypeMetaAttributes;
