import { useFsModifications } from '@flagship.io/react-sdk';
import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import CodeBlock from '../../../common/CodeBlock';

export const DemoUseFsModifications = () => {
    const fsModifications = useFsModifications([
        {
            key: 'btnColor',
            defaultValue: 'green',
            activate: false
        }
    ]);
    const demoHookName = 'useFsModifications';
    return (
        <Row>
            <Col>
                <div className="fsAnchor" id={demoHookName} />
                <Alert variant="dark" className="fs-alert demoHook">
                    <Alert.Heading>{demoHookName}</Alert.Heading>
                    <p>
                        Use <b>{demoHookName}</b> hook to get the modifications:
                    </p>
                    <CodeBlock
                        className="mv3"
                        codeString={`import { useFsModifications } from '@flagship.io/react-sdk';
const fsModifications = useFsModifications([
  {
      key: 'btnColor',
      defaultValue: 'green',
      activate: false
  }
]);              `}
                    />
                    <p>Output: </p>
                    <div>
                        <button
                            style={{
                                backgroundColor: fsModifications.btnColor
                            }}
                        >
                            I'm a button customized with Flagship
                        </button>
                    </div>
                    <CodeBlock
                        className="mv3"
                        codeString={`<div>
    <button style={{ backgroundColor: ${fsModifications.btnColor} }}>
        I'm a button customized with Flagship
    </button>
</div>              `}
                    />
                </Alert>
            </Col>
        </Row>
    );
};
