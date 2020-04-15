import CodeBlock from '@tenon-io/tenon-codeblock';
import React, { useEffect, useState, useContext } from 'react';
import { Alert, Col, Row, Form, Button } from 'react-bootstrap';
import config from '../../../../config';
import { SettingContext, AppSettings, SdkSettings } from '../../../../App';

export const DemoInitialization = ({ onSubmitNewSettings }) => {
    const name = 'initialization';
    const contextTemp = { ...config.visitorData.context };
    const { currentSettings: currSettings, setSettings } = useContext(
        SettingContext
    ) as AppSettings;
    const [newSettings, setNewSettings] = React.useState<SdkSettings>({
        ...currSettings
    });
    const handleEnvId = (e) =>
        setNewSettings({ ...newSettings, envId: e.target.value });
    const handleVisitorId = (e) =>
        setNewSettings({
            ...newSettings,
            visitorData: {
                ...newSettings.visitorData,
                id: e.target.value
            }
        });

    const handleVisitorContext = (e) => {
        const node = JSON.parse(e.currentTarget.parentElement.innerText);
        const temp = { ...newSettings };
        if (e.currentTarget.checked) {
            setNewSettings({
                ...newSettings,
                visitorData: {
                    ...newSettings.visitorData,
                    context: { ...newSettings.visitorData.context, ...node }
                }
            });
        } else {
            const keyToRemove = Object.keys(node)[0];
            setNewSettings({
                ...newSettings,
                visitorData: {
                    ...newSettings.visitorData,
                    context: Object.entries(temp.visitorData.context).reduce(
                        (reducer, [key, value]) => {
                            if (key === keyToRemove) {
                                return reducer;
                            }
                            return { ...reducer, [key]: value };
                        },
                        {}
                    )
                }
            });
        }
    };
    return (
        <Row>
            <Col>
                <a className="fsAnchor" id={name} />
                <Alert variant="dark" className="fs-alert demoHook">
                    <Alert.Heading>{name}</Alert.Heading>
                    <p>
                        The <b>{name}</b> is proceed with{' '}
                        <b>FlagshipProvider</b>. In this demo app, it is plugged
                        like so:
                    </p>
                    <CodeBlock
                        className="mv3"
                        codeString={`

import React from 'react';
import { FlagshipProvider } from "@flagship.io/react-sdk";

const App: React.FC = () => (
  <>
      <FlagshipProvider
      envId={${currSettings.envId}}
      config={
        ${JSON.stringify(currSettings.sdkConfig, null, 2)}
      }
      visitorData={
        ${JSON.stringify(currSettings.visitorData, null, 2)}
    }
      onInitStart={() => {
        console.log("init start");
      }}
      onInitDone={() => {
        console.log("init done");
      }}
      loadingComponent={
        <Container className="mt3">
          <Row>
            <Col xs={12}>Loading Flagship React SDK...</Col>
          </Row>
        </Container>
      }
    >
      <Header />
      <AppContainer />
    </FlagshipProvider>
  </>
);
          `}
                    />
                    <p>
                        To understand impact of each props, you can change some
                        value dynamically here:{' '}
                    </p>
                    <Form>
                        <Form.Group controlId="initForm.ControlSelect1">
                            <Form.Label>envId</Form.Label>
                            <Form.Control as="select" onChange={handleEnvId}>
                                {config.sandbox.envId.map((id) => (
                                    <option>{id}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="initForm.ControlSelect2">
                            <Form.Label>visitorId</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={handleVisitorId}
                            >
                                {config.sandbox.visitorId.map((id) => (
                                    <option>{id}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="initForm.ControlSelect3">
                            <Form.Label>visitor context</Form.Label>
                            {Object.entries(contextTemp).map(([key, value]) => (
                                <Form.Check
                                    key={key}
                                    type="checkbox"
                                    id={`default-${key}`}
                                    checked={newSettings.visitorData.context.hasOwnProperty(
                                        key
                                    )}
                                    onClick={handleVisitorContext}
                                    label={JSON.stringify({ [key]: value })}
                                />
                            ))}
                        </Form.Group>
                    </Form>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button
                            variant="secondary"
                            onClick={() => setSettings({ ...newSettings })}
                        >
                            Apply change
                        </Button>
                    </div>
                    <div>Since we have set those settings:</div>
                    <CodeBlock
                        className="mv3"
                        codeString={`${JSON.stringify(
                            currSettings.sdkConfig,
                            null,
                            2
                        )}`}
                    />
                    <div>
                        When you change those values, you can notice the
                        behavior of the SDK, on logs & network.
                    </div>
                    <div>
                        It will impact the output of Flagship SDK Hooks as well,
                        take a look below.
                    </div>
                </Alert>
            </Col>
        </Row>
    );
};