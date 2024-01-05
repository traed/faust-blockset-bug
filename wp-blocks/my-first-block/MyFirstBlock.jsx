import { useBlocksTheme } from "@faustwp/blocks";

export default function MyFirstBlock(props) {
    // This does not work
    // const theme = useBlocksTheme();
    // const style = getStyles(theme, Object.assign({}, props));
    // const { attributes} = props;

    // This does work
    const { style, attributes} = props;

    const styles = {
      ...style,
    };
    const cssClassName = 'create-block-my-first-block';
    return (
        <div
            style={styles}
            className={cssClassName}
            dangerouslySetInnerHTML={{ __html: attributes.message }}
        />
    );
}